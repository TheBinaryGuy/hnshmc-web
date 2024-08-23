import type { ContextVariables } from '@/server/types';
import { createRoute, OpenAPIHono } from '@hono/zod-openapi';
import { tblStudentSchema } from 'prisma/generated/zod';

const profile = new OpenAPIHono<{ Variables: ContextVariables }>().openapi(
    createRoute({
        method: 'get',
        path: '/api/manage/profile',
        tags: ['Maange'],
        summary: 'Get user profile',
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: tblStudentSchema,
                    },
                },
            },
        },
    }),
    async c => {
        const user = c.get('user')!;
        const db = c.get('db');

        const appUser = await db.appUser.findFirstOrThrow({
            where: {
                id: user.id,
            },
            include: {
                student: true,
            },
        });

        return c.json(appUser.student);
    }
);

export const manageApp = new OpenAPIHono<{ Variables: ContextVariables }>().route('/', profile);
