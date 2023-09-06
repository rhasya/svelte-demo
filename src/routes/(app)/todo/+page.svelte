<script>
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import api from '$lib/api.js';

	export let data;
	export let form;

	/** @param {number} id */
	async function handleClick(id) {
		await api.deleteTodo(id);
		await invalidate('app:load_todo');
	}
</script>

<h1>TODO</h1>
<ul>
	{#each data.todos as todo (todo.id)}
		<li>
			<div>
				{todo.content}
				<button on:click={async () => await handleClick(todo.id)}>X</button>
			</div>
		</li>
	{/each}
</ul>
<form method="POST" use:enhance>
	<div class="input-wrap">
		<input type="text" name="content" value={form?.content ?? ''} />
		<button>등록</button>
	</div>
</form>

<style>
	div.input-wrap {
		height: 1.8rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
</style>
