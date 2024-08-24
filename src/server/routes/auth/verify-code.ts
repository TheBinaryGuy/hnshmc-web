import type { ContextVariables } from '@/server/types';
import { lucia } from '@/services/auth';
import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import { HTTPException } from 'hono/http-exception';
import { isWithinExpirationDate } from 'oslo';

export const verifyCodeSchema = z.object({
    confirmationCode: z.string(),
    email: z.string().email(),
});

export const verifyCodeRoute = new OpenAPIHono<{
    Variables: ContextVariables;
}>().openapi(
    createRoute({
        method: 'post',
        path: '/api/auth/verify-code',
        tags: ['Auth'],
        summary: 'Verifies the confirmation code.',
        request: {
            body: {
                description: 'Request body',
                content: {
                    'application/json': {
                        schema: verifyCodeSchema.openapi('Verify', {
                            example: {
                                email: 'hey@example.com',
                                confirmationCode: '42424242',
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
        const { email, confirmationCode } = c.req.valid('json');
        const db = c.get('db');

        const existingUser = await db.appUser.findFirst({
            where: {
                student: {
                    Email: email,
                },
            },
            include: {
                appEmailVerificationCodes: true,
            },
        });

        const error = new HTTPException(400, {
            message:
                'Either the user does not exist, the email is already verified or there is no existing user secret.',
        });

        if (!existingUser || existingUser.appEmailVerificationCodes.length <= 0) {
            throw error;
        }

        const code = existingUser.appEmailVerificationCodes.at(0)!;
        if (!isWithinExpirationDate(code.expiresAt) || code.code !== confirmationCode) {
            throw error;
        }

        await db.appEmailVerificationCodes.deleteMany({
            where: {
                id: code.id,
            },
        });

        const session = await lucia.createSession(existingUser.id, {});
        c.header('sessionid', session.id);

        return c.json({});
    }
);
