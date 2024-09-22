import { serverEnvs } from '@/env/server';
import prisma from '@/services/db';
import { CustomPrismaAdapter } from '@/services/prisma-adapter';
import { CustomPrismaAdapterAdmin } from '@/services/prisma-adapter-admin';
import { Lucia } from 'lucia';

const adapter = new CustomPrismaAdapter(prisma.appSession, prisma.appUser);
const adapterAdmin = new CustomPrismaAdapterAdmin(prisma.appAdminSession, prisma.appAdminUser);

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
            email: attributes.email,
        };
    },
});

export const luciaAdmin = new Lucia(adapterAdmin, {
    sessionCookie: {
        attributes: {
            secure: serverEnvs.NODE_ENV === 'production',
        },
        name: 'admin-sessionid',
    },
    getUserAttributes: attributes => {
        return {
            id: attributes.id,
            email: attributes.email,
        };
    },
});

export function getLucia(admin: boolean = false) {
    return admin ? luciaAdmin : lucia;
}

declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: {
            id: string;
            email: string | null;
        };
    }
}
