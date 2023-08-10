export async function handle({ event, resolve }) {
	// check cookie
	const { cookies, locals } = event;

	const username = cookies.get('username');
	locals.username = username ? username : null;

	return await resolve(event);
}
