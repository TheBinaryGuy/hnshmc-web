import type { ContextVariables } from '@/server/types';
import { lucia, luciaAdmin } from '@/services/auth';
import { createRoute, OpenAPIHono } from '@hono/zod-openapi';

export const logout = new OpenAPIHono<{ Variables: ContextVariables }>()
    .openapi(
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
            const authHeader = c.req.header('Authorization');
            if (!authHeader) {
                return c.json({});
            }

            const sessionId = lucia.readBearerToken(authHeader);
            if (!sessionId) {
                return c.json({});
            }

            await lucia.invalidateSession(sessionId);
            return c.json({});
        }
    )
    .openapi(
        createRoute({
            method: 'get',
            path: '/api/auth/admin-logout',
            tags: ['Auth'],
            summary: 'Admin Logout',
            responses: {
                200: {
                    description: 'Success',
                },
            },
        }),
        async c => {
            const authHeader = c.req.header('AdminAuthorization');
            if (!authHeader) {
                return c.json({});
            }

            const sessionId = luciaAdmin.readBearerToken(authHeader);
            if (!sessionId) {
                return c.json({});
            }

            await luciaAdmin.invalidateSession(sessionId);
            return c.json({});
        }
    );
