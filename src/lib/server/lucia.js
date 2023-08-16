import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { prisma } from '@lucia-auth/adapter-prisma';
import { prisma as client } from './prismaClient';

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: prisma(client, {
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
