<script lang="ts">
	import Select, { Option } from '@smui/select';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';

	export let monitor: IMonitor;
</script>

<Select
	bind:value={monitor.scalingValue}
	label="Scaling Value"
	input$name={`scalingValue${monitor.index}`}
	on:MDCSelect:change={() => monitors.set($monitors)}
	variant="filled"
>
	{#each [100, 125, 150, 175, 200, 225, 250, 275, 300] as value}
		<Option {value}>{value}%</Option>
	{/each}
</Select>
