import type { ContextVariables } from '@/server/types';
import { lucia, luciaAdmin } from '@/services/auth';
import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import { HTTPException } from 'hono/http-exception';
import { generateId } from 'lucia';

export const sendCodeSchema = z.object({
    email: z.string().email(),
});

export const sendCodeRoute = new OpenAPIHono<{
    Variables: ContextVariables;
}>().openapi(
    createRoute({
        method: 'post',
        path: '/api/auth/send-code',
        tags: ['Auth'],
        summary: 'Emails the user a temporary code',
        request: {
            body: {
                description: 'Request body',
                content: {
                    'application/json': {
                        schema: sendCodeSchema.openapi('SendCode', {
                            example: {
                                email: 'hey@example.com',
                            },
                        }),
                    },
                },
                required: true,
            },
        },
        responses: {
            200: {
                description: 'Success',
                headers: z.object({
                    sessionid: z.string().optional(),
                    'admin-sessionid': z.string().optional(),
                }),
            },
        },
    }),
    async c => {
        const { email } = c.req.valid('json');
        const db = c.get('db');
        const normalizedEmail = email.toUpperCase();

        const adminUser = await db.appAdminUser.findFirst({
            where: {
                email,
            },
        });

        if (adminUser !== null) {
            const session = await luciaAdmin.createSession(adminUser.id, {});
            c.header('admin-sessionid', session.id);
            return c.json({});
        }

        const user = await db.appUser.findFirst({
            where: {
                student: {
                    Email: email,
                },
            },
        });

        let id: string;
        if (!user) {
            const student = await db.tblStudent.findFirst({
                where: {
                    Email: {
                        equals: normalizedEmail,
                    },
                },
            });

            if (!student || student.IsDelete === true) {
                throw new HTTPException(404, {
                    message: 'User not found.',
                });
            }

            id = generateId(15);
            await db.appUser.create({
                data: {
                    id,
                    studentId: student.StudentIDP,
                },
            });
        } else {
            id = user.id;
        }

        const session = await lucia.createSession(id, {});
        c.header('sessionid', session.id);
        return c.json({});
    }
);
