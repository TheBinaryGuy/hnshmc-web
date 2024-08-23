import type { ContextVariables } from '@/server/types';
import type { MiddlewareHandler } from 'hono';

export const requiresAuth: MiddlewareHandler<{ Variables: ContextVariables }> = async (c, next) => {
    const user = c.get('user');
    if (!user) {
        c.status(401);
        return c.body(null);
    }

    return next();
};
