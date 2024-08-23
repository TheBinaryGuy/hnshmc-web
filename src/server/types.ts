import type { Session, User } from 'lucia';

import type prisma from '@/services/db';

export type ContextVariables = {
    db: typeof prisma;
    user: User | null;
    session: Session | null;
};
