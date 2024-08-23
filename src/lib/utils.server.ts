import 'server-only';

import { Template as ConfirmationCode } from '@/emails/confirmation-code';
import { serverEnvs } from '@/env/server';
import { lucia } from '@/services/auth';
import prisma from '@/services/db';
import { render } from 'jsx-email';
import { cookies } from 'next/headers';
import { createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { createDate, isWithinExpirationDate, TimeSpan } from 'oslo';
import { alphabet, generateRandomString } from 'oslo/crypto';
import { cache } from 'react';
import { Resend } from 'resend';

export const getUser = cache(async () => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value;
    if (!sessionId) return null;

    const { user } = await lucia.validateSession(sessionId);
    return user;
});

function getSmtpTransporter() {
    const requiresAuth =
        typeof serverEnvs.SMTP_USERNAME !== 'undefined' &&
        typeof serverEnvs.SMTP_PASSWORD !== 'undefined';

    return createTransport(
        new SMTPTransport({
            auth: requiresAuth
                ? {
                      user: serverEnvs.SMTP_USERNAME,
                      pass: serverEnvs.SMTP_PASSWORD,
                  }
                : undefined,
            host: serverEnvs.SMTP_HOST,
            port: serverEnvs.SMTP_PORT,
            secure: serverEnvs.SMTP_SECURE,
        })
    );
}

// TODO: This could be injected into the function or have a factory function that returns the appropriate implementation
export async function sendVerificationCode(emailAddress: string, code: string) {
    if (serverEnvs.EMAIL_PROVIDER === 'console') {
        console.info(`Email From: ${serverEnvs.EMAIL_FROM} | Email To: ${emailAddress}`);
        console.info(`Your confirmation code: ${code}`);
        return true;
    }

    try {
        const html = await render(ConfirmationCode({ validationCode: code }));

        if (serverEnvs.EMAIL_PROVIDER === 'resend') {
            const resend = new Resend(serverEnvs.RESEND_API_KEY);
            const { error } = await resend.emails.send({
                from: serverEnvs.EMAIL_FROM,
                to: emailAddress,
                subject: `Your confirmation code: ${code}`,
                html,
                text: `Your confirmation code: ${code}`,
            });

            return error === null;
        }

        const transporter = getSmtpTransporter();
        await transporter.sendMail({
            from: serverEnvs.EMAIL_FROM,
            to: emailAddress,
            subject: `Your confirmation code: ${code}`,
            html,
            text: `Your confirmation code: ${code}`,
        });

        return true;
    } catch {
        return false;
    }
}

export async function generateEmailVerificationCode(userId: string): Promise<string> {
    const existingCode = await prisma.appEmailVerificationCodes.findFirst({
        select: {
            code: true,
            expiresAt: true,
        },
        where: {
            userId,
        },
    });

    if (existingCode !== null && isWithinExpirationDate(existingCode.expiresAt)) {
        return existingCode.code;
    }

    const code = generateRandomString(8, alphabet('0-9'));
    if (existingCode) {
        await prisma.appEmailVerificationCodes.deleteMany({
            where: {
                userId,
            },
        });
    }

    await prisma.appEmailVerificationCodes.create({
        data: {
            userId,
            code,
            expiresAt: createDate(new TimeSpan(5, 'm')),
        },
    });

    return code;
}
