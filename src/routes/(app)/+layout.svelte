<div class="app">
	<nav class="nav">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/user">User</a></li>
			<li><a href="/todo">Todo</a></li>
		</ul>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style>
	div.app {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		height: 100%;
	}
	nav.nav {
		background-color: #dbedf7;
		width: 180px;
		height: 100%;
	}
	nav.nav ul {
		list-style: none;
	}
	main {
		margin-left: 1rem;
	}
</style>
