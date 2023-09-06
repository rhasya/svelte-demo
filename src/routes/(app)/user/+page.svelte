<script>
	export let data;
</script>

<h1>User</h1>

<table>
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
	<a href="/user/new" role="button">New User</a>
</div>

<style lang="scss">
	table {
		border-collapse: collapse;
		margin-bottom: 20px;
		th,
		td {
			border: 1px solid black;
			padding: 2px 4px;
		}
		td:nth-child(1) {
			width: 100px;
			text-align: right;
		}
		td:nth-child(2) {
			width: 100px;
		}
	}
</style>
