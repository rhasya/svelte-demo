import todo from '@repo/todo';

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
	default: async ({ request }) => {
		const formData = await request.formData();
		const content = `${formData.get('content') ?? ''}`;

		// Save
		await todo.create({
			data: {
				content
			}
		});

		return { content: '' };
	}
};
