<script lang="ts">
	import Select, { Option } from '@smui/select';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';
	export let monitor: IMonitor;
</script>

<Select
	bind:value={monitor.syncType}
	label="Sync Type"
	input$name={`syncType${monitor.index}`}
	on:MDCSelect:change={() => monitors.set($monitors)}
	variant="filled"
>
	<Option value="any">Any</Option>
	<Option value="none">None</Option>
	<Option value="G-Sync">G-Sync</Option>
	<Option value="FreeSync">FreeSync</Option>
	<Option value="ProMotion">ProMotion</Option>
</Select>
