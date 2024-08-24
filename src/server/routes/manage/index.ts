import type { ContextVariables } from '@/server/types';
import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import { tblFeesSchema, tblStudentSchema } from 'prisma/generated/zod';

const profile = new OpenAPIHono<{ Variables: ContextVariables }>().openapi(
    createRoute({
        method: 'get',
        path: '/api/manage/profile',
        tags: ['Maange'],
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
);

const fees = new OpenAPIHono<{ Variables: ContextVariables }>().openapi(
    createRoute({
        method: 'get',
        path: '/api/manage/fees',
        tags: ['Maange'],
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
    .route('/', profile)
    .route('/', fees);
