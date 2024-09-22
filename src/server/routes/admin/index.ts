import { isAdmin } from '@/server/middleware';
import type { ContextVariables } from '@/server/types';
import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import { tblStudentSchema } from 'prisma/generated/zod';

const users = new OpenAPIHono<{ Variables: ContextVariables }>().openapi(
    createRoute({
        method: 'get',
        path: '/api/admin/users',
        tags: ['Admin'],
        summary: 'Get paginated users',
        request: {
            query: z.object({
                cursor: z.string().optional(),
                search: z.string().optional(),
            }),
        },
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: z
                            .object({
                                students: tblStudentSchema.pick({
                                    FullName: true,
                                    Email: true,
                                }),
                                nextCursor: z.string().optional(),
                            })
                            .openapi('PaginatedStudents'),
                    },
                },
            },
        },
    }),
    async c => {
        const { cursor, search } = c.req.valid('query')!;
        const db = c.get('db');

        let paginationCursor = cursor
            ? {
                  StudentIDP: parseInt(cursor),
              }
            : undefined;
        if (search) {
            paginationCursor = undefined;
        }

        const students = await db.tblStudent.findMany({
            orderBy: {
                StudentIDP: 'asc',
            },
            cursor: paginationCursor,
            select: {
                StudentIDP: true,
                FullName: true,
                Email: true,
            },
            where: search
                ? {
                      OR: [
                          {
                              FullName: {
                                  contains: search,
                              },
                          },
                          {
                              Email: {
                                  contains: search,
                              },
                          },
                      ],
                  }
                : undefined,
            skip: paginationCursor ? 1 : undefined,
            take: paginationCursor ? 20 : undefined,
        });

        const nextCursor = students.at(-1)?.StudentIDP;
        return c.json({
            students,
            nextCursor,
        });
    }
);

export const adminApp = new OpenAPIHono<{ Variables: ContextVariables }>()
    .use('/api/admin/*', isAdmin)
    .route('/', users);
