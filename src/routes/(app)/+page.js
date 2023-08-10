export async function load({ parent }) {
	const { username } = await parent();
	return { username };
}
