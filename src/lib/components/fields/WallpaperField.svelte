<script lang="ts">
	import TextField from '@smui/textfield';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';
	import { urlRegex } from '$lib/utils/regex';

	export let monitor: IMonitor;

	$: invalid = !!monitor.wallpaper && !urlRegex.test(monitor.wallpaper);
</script>

<TextField
	bind:invalid
	bind:value={monitor.wallpaper}
	label="Wallpaper Link"
	input$name={`wallpaperLink${monitor.index}`}
	on:change={() => monitors.set($monitors)}
	style="width:100%;"
	type="url"
	validateOnValueChange
	variant="filled"
/>
