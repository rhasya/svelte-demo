import { error } from '@sveltejs/kit';
import todo from '@repo/todo';

export const DELETE = async ({ params }) => {
	try {
		const id = parseInt(params.id);

		await todo.delete({
			where: {
				id
			}
		});

		return new Response();
	} catch (e) {
		throw error(404, 'Not Found');
	}
};
