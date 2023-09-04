<script lang="ts">
	import Select, { Option } from '@smui/select';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';
	export let monitor: IMonitor;
</script>

<Select
	bind:value={monitor.displayType}
	label="Display Type"
	input$name={`displayType${monitor.index}`}
	on:MDCSelect:change={() => monitors.set($monitors)}
	variant="filled"
>
	<Option value="any">Any</Option>
	<Option value="TN">TN</Option>
	<Option value="IPS">IPS</Option>
	<Option value="VA">VA</Option>
	<Option value="OLED">OLED</Option>
	<Option value="Mini LED">Mini LED</Option>
	<Option value="Micro LED">Micro LED</Option>
</Select>
