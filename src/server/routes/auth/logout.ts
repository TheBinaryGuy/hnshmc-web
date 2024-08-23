import type { ContextVariables } from '@/server/types';
import { lucia } from '@/services/auth';
import { createRoute, OpenAPIHono } from '@hono/zod-openapi';

export const logout = new OpenAPIHono<{ Variables: ContextVariables }>().openapi(
    createRoute({
        method: 'get',
        path: '/api/auth/logout',
        tags: ['Auth'],
        summary: 'Logout',
        responses: {
            200: {
                description: 'Success',
            },
        },
    }),
    async c => {
        const session = c.get('session');
        if (!session) {
            return c.json({});
        }

        await lucia.invalidateSession(session.id);
        return c.json({});
    }
);
