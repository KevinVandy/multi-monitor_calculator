<script lang="ts">
	import TextField from '@smui/textfield';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';

	export let monitor: IMonitor;
</script>

<TextField
	bind:value={monitor.bezelColor}
	label="Bezel Color"
	input$name={`bezelColor${monitor.index}`}
	on:change={() => monitors.set($monitors)}
	type="color"
	variant="filled"
/>
