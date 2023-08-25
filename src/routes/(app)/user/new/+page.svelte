<script>
	import { enhance } from '$app/forms';
</script>
<h1>New User</h1>
<form method="POST" use:enhance>
  <div>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" />
  </div>
	<div>
		<button type="submit">저장</button>
	</div>
</form>
<a href="/user" role="button">Back</a>

<style lang="scss">
	form {
		margin-bottom: 20px;
	}
</style>