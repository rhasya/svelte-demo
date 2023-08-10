import { redirect } from '@sveltejs/kit';

export const actions = {
	default: ({ cookies }) => {
		cookies.delete('username', { path: '/', secure: false });

		throw redirect(303, '/login');
	}
};
