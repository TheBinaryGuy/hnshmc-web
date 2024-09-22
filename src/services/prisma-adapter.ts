import { transformIntoDatabaseSession, transformIntoDatabaseUser } from '@/lib/utils.server';
import prisma from '@/services/db';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { type DatabaseSession, type DatabaseUser } from 'lucia';

export class CustomPrismaAdapter extends PrismaAdapter<typeof prisma> {
    public async getSessionAndUser(
        sessionId: string
    ): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]> {
        const result = await prisma.appSession.findFirst({
            where: {
                id: sessionId,
            },
            include: {
                appUser: {
                    include: {
                        student: {
                            select: {
                                Email: true,
                            },
                        },
                    },
                },
            },
        });

        if (!result) return [null, null];
        const { appUser: user, ...session } = result;
        if (!user || !session) return [null, null];

        return [
            transformIntoDatabaseSession(session),
            transformIntoDatabaseUser({
                id: user.id,
                email: user.student.Email,
            }),
        ];
    }
}
