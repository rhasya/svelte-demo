/** @param {number} id  */
const deleteTodo = async (id) =>
	fetch(`/api/v1/todo/${id}`, {
		method: 'DELETE'
	});

export default {
	deleteTodo
};
