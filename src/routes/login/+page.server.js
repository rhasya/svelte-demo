import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies }) => {
		// add login info to cookies
		cookies.set('username', 'admin', { path: '/', secure: false });

		throw redirect(303, '/');
	}
};

export function load({ locals }) {
	if (locals.username) {
		throw redirect(307, '/');
	}
}
