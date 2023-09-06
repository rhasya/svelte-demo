<script>
	export let data;
</script>

<h1>User</h1>

<table class="table mb-4">
	<thead>
		<tr>
			<th>NO</th>
			<th>Username</th>
		</tr>
	</thead>
	<tbody>
		{#each data.users as user (user.id)}
			<tr>
				<td>{user.idx}</td>
				<td>{user.username}</td>
			</tr>
		{/each}
	</tbody>
</table>
<div>
	<a role="button" class="btn btn-primary" href="/user/new">New User</a>
</div>
