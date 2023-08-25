import { auth } from '$lib/server/lucia.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		console.log('SIGN UP...');

		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		// validation
		if (typeof username !== 'string' || username.length < 4 || username.length > 31) {
			return fail(400, {
				message: 'Invalid username'
			});
		}

		if (typeof password !== 'string' || password.length < 1 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}

		try {
			await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username.toLowerCase(),
					password
				},
				attributes: {
					username
				}
			});
		} catch (e) {
			console.error(e);
			return fail(500, { message: 'An unknown error occurred' });
		}

		throw redirect(307, '/login');
	}
};
