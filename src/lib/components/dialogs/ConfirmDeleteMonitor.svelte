<script lang="ts">
	import Dialog, { Content as DialogContent, Actions as DialogActions, Title } from '@smui/dialog';
	import Button from '@smui/button';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';

	export let confirmDeleteMonitorDialogOpen = false;
	export let monitor: IMonitor;

	const handleDeleteMonitor = () => {
		monitors.update((ms) => {
			ms.splice(ms.indexOf(monitor!), 1);
			ms.forEach((m, i) => (m.index = i));
			return ms;
		});
	};
</script>

<Dialog bind:open={confirmDeleteMonitorDialogOpen}>
	<Title style="text-align: left;">Are you sure?</Title>
	<DialogContent>
		<p>
			Are you sure you want to delete monitor <i>{monitor?.name || monitor.index + 1}</i> ?
		</p>
	</DialogContent>
	<DialogActions>
		<Button on:click={() => (confirmDeleteMonitorDialogOpen = false)}>No, Cancel</Button>
		<Button
			on:click={() => {
				handleDeleteMonitor();
				confirmDeleteMonitorDialogOpen = false;
			}}
		>
			Yes, Delete
		</Button>
	</DialogActions>
</Dialog>
