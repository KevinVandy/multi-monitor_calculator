<script lang="ts">
	import IconButton from '@smui/icon-button';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import MenuSurface from '@smui/menu-surface';
	import TextField from '@smui/textfield';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';
	import ConfirmDeleteMonitor from '../dialogs/ConfirmDeleteMonitor.svelte';

	export let monitor: IMonitor;
	let confirmDeleteMonitorDialogOpen = false;
	let surface: MenuSurface;
</script>

<Wrapper>
	<IconButton
		aria-label="Edit Monitor Name"
		class="material-icons"
		on:click={function () {
			surface.setOpen(true);
			//@ts-ignore
			this.blur();
		}}
	>
		edit
	</IconButton>
	<Tooltip>Rename this monitor to its product name or a nickname</Tooltip>
</Wrapper>
<Wrapper>
	<IconButton
		aria-label="Delete this monitor"
		class="material-icons"
		on:click={() => (confirmDeleteMonitorDialogOpen = true)}
	>
		delete
	</IconButton>
	<Tooltip>Delete this monitor</Tooltip>
</Wrapper>
<MenuSurface bind:this={surface}>
	<div>
		<TextField
			bind:value={monitor.name}
			label="Monitor Name"
			input$name={`monitorName${monitor.index}`}
			on:change={() => monitors.set($monitors)}
			style="width:100%;"
			type="text"
			variant="filled"
			on:keydown={(e) => {
				//@ts-ignore
				if (e.key === 'Enter') {
					surface.setOpen(false);
				}
			}}
		/>
		<Wrapper>
			<IconButton class="material-icons" on:click={() => surface.setOpen(false)}>save</IconButton>
			<Tooltip>Save</Tooltip>
		</Wrapper>
	</div>
</MenuSurface>
<ConfirmDeleteMonitor bind:confirmDeleteMonitorDialogOpen bind:monitor />

<style>
	div {
		display: flex;
		padding: 1rem;
		min-width: 20rem;
	}
</style>
