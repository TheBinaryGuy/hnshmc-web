import { generateEmailVerificationCode, sendVerificationCode } from '@/lib/utils.server';
import type { ContextVariables } from '@/server/types';
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
            },
        },
    }),
    async c => {
        const { email } = c.req.valid('json');
        const db = c.get('db');

        const normalizedEmail = email.toUpperCase();

        const user = await db.appUser.findFirst({
            where: {
                student: {
                    Email: normalizedEmail,
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

        const code = await generateEmailVerificationCode(id);
        const success = await sendVerificationCode(email, code);

        if (!success) {
            throw new HTTPException(500, {
                message: 'Failed to send email.',
            });
        }

        return c.json({});
    }
);
