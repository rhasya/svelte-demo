import { auth } from '$lib/server/lucia.js';
import { fail, redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia';

export const actions = {
	default: async ({ locals }) => {
		try {
			const username = 'admin';
			const password = 'admin';

			const user = await auth.useKey('username', username, password);
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session);
		} catch (e) {
			console.error(e);
			if (
				e instanceof LuciaError &&
				(e.message === 'AUTH_INVALID_KEY_ID' || e.message === 'AUTH_INVALID_PASSWORD')
			) {
				return fail(400, { message: 'Incorrect username of password' });
			}

			return fail(500, { message: 'Incorrect username of password' });
		}

		throw redirect(302, '/');
	}
};

export async function load({ locals }) {
	const session = await locals.auth.validate();
	if (session) throw redirect(303, '/');
	return {};
}
