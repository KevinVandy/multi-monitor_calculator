<script lang="ts">
	import Slider from '@smui/slider';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';

	export let monitor: IMonitor;
</script>

<div>
	<label for={`bezelWidthSlider${monitor.index}`}>Bezel Width</label>
	<Slider
		bind:value={monitor.bezelWidth}
		min={0}
		max={3}
		input$name={`bezelWidthSlider${monitor.index}`}
		on:MDCSlider:change={() => monitors.set($monitors)}
		step={0.25}
		discrete
		id={`bezelWidthSlider${monitor.index}`}
	/>
</div>

<style>
	div {
		background-color: var(--input-background-color);
		border-bottom: 1px solid var(--input-label-color);
		max-height: 55px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	label {
		text-align: left;
		display: block;
		width: 100%;
		transform: scale(0.75);
		color: var(--input-label-color);
	}
</style>
