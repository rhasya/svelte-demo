import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	const { username } = locals;

	if (username) {
		return {
			username
		};
	} else {
		throw redirect(303, '/login');
	}
}
