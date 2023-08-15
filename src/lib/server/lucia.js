import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { prisma } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: prisma(prismaClient, {
		user: 'user',
		key: 'key',
		session: 'session'
	}),

	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});
