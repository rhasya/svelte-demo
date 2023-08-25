import { prisma } from '$lib/server/prismaClient';

export async function load() {
	let idx = 0;
	const users = (await prisma.User.findMany()).map((user) => ({ ...user, idx: ++idx }));

	return { users };
}
