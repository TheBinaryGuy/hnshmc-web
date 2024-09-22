import { serverEnvs } from '@/env/server';
import { requiresAuth } from '@/server/middleware';
import type { ContextVariables } from '@/server/types';
import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import { tblFeesSchema, tblStudentSchema } from 'prisma/generated/zod';

const S3 = new S3Client({
    region: 'auto',
    endpoint: `https://${serverEnvs.ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: serverEnvs.ACCESS_KEY_ID,
        secretAccessKey: serverEnvs.SECRET_ACCESS_KEY,
    },
});

function generateKey(id: string) {
    return `${id}/profile-${crypto.randomUUID()}`;
}

function getProfileUrl(key: string) {
    return `https://${serverEnvs.BUCKET_DOMAIN}/${key}`;
}

const profile = new OpenAPIHono<{ Variables: ContextVariables }>()
    .openapi(
        createRoute({
            method: 'get',
            path: '/api/manage/profile',
            tags: ['Manage'],
            summary: 'Get user profile',
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: tblStudentSchema,
                        },
                    },
                },
            },
        }),
        async c => {
            const user = c.get('user')!;
            const db = c.get('db');

            const appUser = await db.appUser.findFirstOrThrow({
                where: {
                    id: user.id,
                },
                include: {
                    student: true,
                },
            });

            return c.json(appUser.student);
        }
    )
    .openapi(
        createRoute({
            method: 'post',
            path: '/api/manage/profile/start-upload',
            tags: ['Manage'],
            summary: 'Get pre-signed upload URL',
            request: {
                body: {
                    description: 'Request body',
                    content: {
                        'application/json': {
                            schema: z.object({
                                contentType: z.string().optional(),
                            }),
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: z.object({
                                url: z.string(),
                            }),
                        },
                    },
                },
                500: {
                    description: 'Server error',
                },
            },
        }),
        async c => {
            const user = c.get('user')!;
            const db = c.get('db');
            const { contentType } = c.req.valid('json');

            const key = generateKey(user.id);

            let url: string | undefined;
            try {
                await db.$transaction(async tx => {
                    await tx.appFile.create({
                        data: {
                            key,
                            userId: user.id,
                        },
                    });

                    url = await getSignedUrl(
                        S3,
                        new PutObjectCommand({
                            Bucket: serverEnvs.BUCKET_NAME,
                            Key: key,
                            ContentType: contentType,
                        }),
                        { expiresIn: 60 * 60 } // 1 hour
                    );
                });
            } catch {
                c.status(500);
                return c.body(null);
            }

            if (!url) {
                c.status(500);
                return c.body(null);
            }

            return c.json({
                url,
                key,
            });
        }
    )
    .openapi(
        createRoute({
            method: 'post',
            path: '/api/manage/profile/complete-upload',
            tags: ['Manage'],
            summary: 'Update database to reflect profile upload',
            request: {
                body: {
                    description: 'Request body',
                    content: {
                        'application/json': {
                            schema: z.object({
                                key: z.string(),
                            }),
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                },
                500: {
                    description: 'Server error',
                },
            },
        }),
        async c => {
            const { key } = c.req.valid('json');
            const db = c.get('db');
            const user = c.get('user')!;

            try {
                await db.$transaction(async tx => {
                    await tx.appUser.update({
                        data: {
                            student: {
                                update: {
                                    ProfileImage: getProfileUrl(key),
                                },
                            },
                        },
                        where: {
                            id: user.id,
                        },
                    });
                });
            } catch {
                c.status(500);
                return c.body(null);
            }

            return c.body(null);
        }
    )
    .openapi(
        createRoute({
            method: 'delete',
            path: '/api/manage/profile/clear-image',
            tags: ['Manage'],
            summary: 'Clear profile image',
            responses: {
                200: {
                    description: 'Success',
                },
                500: {
                    description: 'Server error',
                },
            },
        }),
        async c => {
            const db = c.get('db');
            const user = c.get('user')!;

            const userData = await db.appUser.findFirst({
                select: {
                    student: {
                        select: {
                            ProfileImage: true,
                        },
                    },
                },
                where: {
                    id: user.id,
                },
            });

            if (!userData || !userData.student.ProfileImage) {
                c.status(500);
                return c.body(null);
            }

            const key = userData.student.ProfileImage!.replace(
                `https://${serverEnvs.BUCKET_DOMAIN}/`,
                ''
            );

            try {
                await db.$transaction(async tx => {
                    await S3.send(
                        new DeleteObjectCommand({
                            Bucket: serverEnvs.BUCKET_NAME,
                            Key: key,
                        })
                    );

                    await tx.appUser.update({
                        data: {
                            student: {
                                update: {
                                    ProfileImage: null,
                                },
                            },
                        },
                        where: {
                            id: user.id,
                        },
                    });
                });
            } catch {
                c.status(500);
                return c.body(null);
            }

            return c.body(null);
        }
    );

const fees = new OpenAPIHono<{ Variables: ContextVariables }>().openapi(
    createRoute({
        method: 'get',
        path: '/api/manage/fees',
        tags: ['Manage'],
        summary: 'Get student fees',
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: tblStudentSchema
                            .pick({
                                TotalFee: true,
                                TermFee: true,
                            })
                            .extend({
                                Fees: z.array(tblFeesSchema),
                            }),
                    },
                },
            },
        },
    }),
    async c => {
        const user = c.get('user')!;
        const db = c.get('db');

        const appUser = await db.appUser.findFirstOrThrow({
            where: {
                id: user.id,
            },
            select: {
                studentId: true,
                student: {
                    select: {
                        TotalFee: true,
                        TermFee: true,
                    },
                },
            },
        });

        const fees = await db.tblFees.findMany({
            where: {
                StudentIDF: appUser.studentId,
            },
        });

        const studentFees = {
            TotalFee: appUser.student.TotalFee,
            TermFee: appUser.student.TermFee,
            Fees: fees,
        };

        return c.json(studentFees);
    }
);

export const manageApp = new OpenAPIHono<{ Variables: ContextVariables }>()
    .use('/api/manage/*', requiresAuth)
    .route('/', profile)
    .route('/', fees);
