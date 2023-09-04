<script lang="ts">
	import TextField from '@smui/textfield';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';
	import { calcAspectRatio } from '$lib/utils/calc';

	export let monitor: IMonitor;
</script>

<TextField
	bind:value={monitor.resolution.horizontal}
	label="Horizontal Resolution"
	input$max="20000"
	input$min="2"
	input$name={`horizontalResolution${monitor.index}`}
	input$step="1"
	on:change={() => {
		const ratio = calcAspectRatio(monitor.resolution.horizontal, monitor.resolution.vertical);
		if (ratio) {
			monitor.aspectRatio = ratio;
		}
		monitors.set($monitors);
	}}
	suffix="pixels"
	type="number"
	variant="filled"
/>
