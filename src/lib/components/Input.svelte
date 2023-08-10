<script>
	export let name = '';
	export let placeholder = name;
	export let value = '';
</script>

<input type="text" {name} {placeholder} bind:value />

<style>
	input[type='text'] {
		height: 24px;
		line-height: 24px;
		border: 1px solid black;
		padding: 0;
	}
</style>
