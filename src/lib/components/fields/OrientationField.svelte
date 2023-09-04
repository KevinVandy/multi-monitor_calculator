<script lang="ts">
	import Select, { Option } from '@smui/select';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';
	export let monitor: IMonitor;
</script>

<Select
	bind:value={monitor.orientation}
	label="Orientation"
	input$name={`orientation${monitor.index}`}
	on:MDCSelect:change={() => monitors.set($monitors)}
	variant="filled"
>
	<Option value="l">Landscape</Option>
	<Option value="p">Portrait</Option>
</Select>
