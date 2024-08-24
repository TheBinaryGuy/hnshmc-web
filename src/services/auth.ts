import { serverEnvs } from '@/env/server';
import prisma from '@/services/db';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { Lucia } from 'lucia';

const adapter = new PrismaAdapter(prisma.appSession, prisma.appUser);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: serverEnvs.NODE_ENV === 'production',
        },
        name: 'sessionid',
    },
    getUserAttributes: attributes => {
        return {
            id: attributes.id,
        };
    },
});

declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: {
            id: number;
        };
    }
}
