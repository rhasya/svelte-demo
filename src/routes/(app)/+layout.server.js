import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	const session = await locals.auth.validate();

	if (session) {
		return { username: session.user.username };
	} else {
		throw redirect(303, '/login');
	}
}
