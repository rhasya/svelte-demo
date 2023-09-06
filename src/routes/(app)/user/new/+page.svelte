<script>
	import { enhance } from '$app/forms';
</script>

<h1>New User</h1>
<form method="POST" use:enhance>
	<div class="form-control">
		<label class="label" for="username">Username</label>
		<input type="text" class="input input-bordered" id="username" name="username" required />
	</div>
	<div class="form-control mb-4">
		<label class="label" for="password">Password</label>
		<input type="password" class="input input-bordered" id="password" name="password" required />
	</div>
	<div>
		<button type="submit" class="btn btn-primary">저장</button>
		<a role="button" class="btn" href="/user">Back</a>
	</div>
</form>

<style lang="scss">
	form {
		margin-bottom: 20px;
	}
</style>
