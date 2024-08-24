import { requiresAuth } from '@/server/middleware';
import { authApp } from '@/server/routes/auth';
import { manageApp } from '@/server/routes/manage';
import type { ContextVariables } from '@/server/types';
import { lucia } from '@/services/auth';
import prisma from '@/services/db';
import { OpenAPIHono } from '@hono/zod-openapi';
import { apiReference } from '@scalar/hono-api-reference';

declare global {
    interface BigInt {
        toJSON(): number;
    }
}

BigInt.prototype.toJSON = function () {
    return Number(this);
};

const app = new OpenAPIHono<{ Variables: ContextVariables }>();

app.use(async (c, next) => {
    c.set('db', prisma);

    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
        c.set('user', null);
        c.set('session', null);
        return next();
    }

    const sessionId = lucia.readBearerToken(authHeader);
    if (!sessionId) {
        c.set('user', null);
        c.set('session', null);
        return next();
    }

    const { session, user } = await lucia.validateSession(sessionId);

    if (session && session.fresh) {
        c.header('auth_session', session.id);
    }

    if (!session) {
        c.header('auth_session', '');
    }

    c.set('user', user);
    c.set('session', session);
    return next();
});

app.doc31('/api/swagger.json', {
    openapi: '3.1.0',
    info: { title: 'HNSHMC - Web', version: '1.0.0' },
});

app.get(
    '/api/scalar',
    apiReference({
        spec: {
            url: '/api/swagger.json',
        },
    })
);

app.get('/api/health', c => {
    c.status(200);
    return c.body(null);
});

const routes = app.route('/', authApp).use(requiresAuth).route('/', manageApp);

export type AppType = typeof routes;

export { app };
