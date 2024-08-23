import { logout } from '@/server/routes/auth/logout';
import { sendCodeRoute } from '@/server/routes/auth/send-code';
import { verifyCodeRoute } from '@/server/routes/auth/verify-code';
import type { ContextVariables } from '@/server/types';
import { OpenAPIHono } from '@hono/zod-openapi';

export const authApp = new OpenAPIHono<{ Variables: ContextVariables }>()
    .route('/', sendCodeRoute)
    .route('/', verifyCodeRoute)
    .route('/', logout);
