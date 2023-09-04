<script lang="ts">
	import { theme } from '$lib/stores/SettingsStore';

	export let appearance = 'toggle';

	const handleThemeChange = (event: CustomEvent) => {
		theme.set(event.detail.colorScheme);
	};
</script>

<dark-mode-toggle
	dark="Dark"
	light="Light"
	mode={$theme ?? 'dark'}
	on:colorschemechange={handleThemeChange}
	{appearance}
/>
