import { adminApp } from '@/server/routes/admin';
import { authApp } from '@/server/routes/auth';
import { manageApp } from '@/server/routes/manage';
import type { ContextVariables } from '@/server/types';
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

const routes = app.route('/', authApp).route('/', manageApp).route('/', adminApp);

export type AppType = typeof routes;

export { app };
