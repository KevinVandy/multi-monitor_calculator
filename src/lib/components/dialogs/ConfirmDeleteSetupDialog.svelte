<script lang="ts">
	import Dialog, { Content as DialogContent, Actions as DialogActions, Title } from '@smui/dialog';
	import Button from '@smui/button';
	import type { ISetup } from '$lib/utils/interfaces';
	import { loadSetup, setups } from '$lib/stores/SetupStore';

	export let setup: ISetup | null = null;
	export let confirmDeleteSetupDialogOpen = false;

	const handleDeleteSetup = () => {
		if (setup) {
			delete $setups[setup.id!];
		}
		setups.set($setups);
		loadSetup($setups[Object.keys($setups)[0]]);
	};
</script>

<Dialog bind:open={confirmDeleteSetupDialogOpen}>
	<Title style="text-align: left;">Are you sure?</Title>
	<DialogContent>
		<p>
			Are you sure you want to delete setup <i>{setup?.name ?? ''}</i> ?
		</p>
	</DialogContent>
	<DialogActions>
		<Button on:click={() => (confirmDeleteSetupDialogOpen = false)}>No, Cancel</Button>
		<Button
			on:click={() => {
				handleDeleteSetup();
				confirmDeleteSetupDialogOpen = false;
			}}
		>
			Yes, Delete
		</Button>
	</DialogActions>
</Dialog>
