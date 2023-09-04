<script lang="ts">
	import Select, { Option } from '@smui/select';
	import { calcResolution } from '$lib/utils/calc';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';
	export let monitor: IMonitor;
</script>

<Select
	bind:value={monitor.aspectRatio}
	label="Aspect Ratio"
	input$name={`aspectRatio${monitor.index}`}
	on:MDCSelect:change={() => {
		[monitor.resolution.horizontal, monitor.resolution.vertical] = calcResolution(
			monitor.aspectRatio,
			monitor.resolution.standard,
		) ?? [monitor.resolution.horizontal, monitor.resolution.vertical];
		monitors.set($monitors);
	}}
	variant="filled"
>
	<Option value="" style="display: none">Custom</Option>
	<Option value="16:9">
		<b>16:9</b>
	</Option>
	<Option value="16:10">
		<b>16:10</b>
	</Option>
	<Option value="16:18">
		<b>16:18</b>
	</Option>
	<Option value="21:9">
		<b>21:9</b>
	</Option>
	<Option value="32:9">32:9</Option>
	<Option value="2:1">2:1</Option>
	<Option value="4:3">4:3</Option>
	<Option value="5:4">
		<b>5:4</b>
	</Option>
	<Option value="1:1">1:1</Option>
</Select>
