import todo from '@repo/todo';
import { fail } from '@sveltejs/kit';

export async function load({ depends }) {
	depends('app:load_todo');

	const todos = await todo.findMany({
		orderBy: {
			id: 'desc'
		}
	});

	return {
		todos
	};
}

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const content = formData.get('content');

		if (typeof content !== 'string' || content.length > 1000) {
			return fail(400, { message: 'Invalid content' });
		}

		const session = await locals.auth.validate();
		if (!session) {
			return fail(500);
		}

		// Save
		await todo.create({
			data: {
				content,
				created_by: session.user.userId
			}
		});

		return { content: '' };
	}
};
