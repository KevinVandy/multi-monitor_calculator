<script lang="ts">
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button from '@smui/button';
	import SetupNameField from '../fields/SetupNameField.svelte';
	import SetupDescriptionField from '../fields/SetupDescriptionField.svelte';

	export let setupEditDialogOpen = false;
</script>

<Dialog bind:open={setupEditDialogOpen}>
	<Title>Edit Setup</Title>
	<Content>
		<div>
			<SetupNameField />
			<SetupDescriptionField />
		</div>
	</Content>
	<Actions>
		<Button type="button" on:click={() => (setupEditDialogOpen = false)}>Close</Button>
	</Actions>
</Dialog>

<style>
	div {
		display: grid;
		min-width: 300px;
		gap: 1rem;
	}
</style>
