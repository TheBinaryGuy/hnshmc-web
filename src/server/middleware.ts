import type { ContextVariables } from '@/server/types';
import { lucia, luciaAdmin } from '@/services/auth';
import type { MiddlewareHandler } from 'hono';

export const requiresAuth: MiddlewareHandler<{ Variables: ContextVariables }> = async (c, next) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
        c.header('sessionid', '');
        c.status(401);
        return c.body(null);
    }

    const sessionId = lucia.readBearerToken(authHeader);
    if (!sessionId) {
        c.header('sessionid', '');
        c.status(401);
        return c.body(null);
    }

    const { session, user } = await lucia.validateSession(sessionId);
    if (!session) {
        c.header('sessionid', '');
        c.status(401);
        return c.body(null);
    }

    if (session && session.fresh) {
        c.header('sessionid', session.id);
    }

    c.set('user', user);
    c.set('session', session);

    return next();
};

export const isAdmin: MiddlewareHandler<{ Variables: ContextVariables }> = async (c, next) => {
    const authHeader = c.req.header('AdminAuthorization');
    if (!authHeader) {
        c.header('admin-sessionid', '');
        c.status(401);
        return c.body(null);
    }

    const sessionId = luciaAdmin.readBearerToken(authHeader);
    if (!sessionId) {
        c.header('admin-sessionid', '');
        c.status(401);
        return c.body(null);
    }

    const { session, user } = await luciaAdmin.validateSession(sessionId);
    if (!session) {
        c.header('admin-sessionid', '');
        c.status(401);
        return c.body(null);
    }

    if (session && session.fresh) {
        c.header('admin-sessionid', session.id);
    }

    c.set('adminUser', user);
    c.set('adminSession', session);

    return next();
};
