<script lang="ts">
	import TextField from '@smui/textfield';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';

	export let monitor: IMonitor;
</script>

<TextField
	bind:value={monitor.notes}
	label="Notes"
	input$name={`monitorNotes${monitor.index}`}
	on:change={() => monitors.set($monitors)}
	textarea
	style="width:100%;max-height:200px;"
	variant="filled"
/>
