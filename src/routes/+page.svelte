<script context="module" lang="ts">
	export const prerender = true;
	import Setup from '$lib/components/Setup.svelte';
	import SetupSubmission from '$lib/components/SetupSubmission.svelte';
</script>

<main>
	<Setup />
	<SetupSubmission />
</main>

<style>
	main {
		padding-bottom: 20rem;
	}
</style>
