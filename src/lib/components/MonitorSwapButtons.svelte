<script lang="ts">
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import IconButton from '@smui/icon-button';
	import { monitors } from '$lib/stores/SetupStore';
	import type { IMonitor } from '$lib/utils/interfaces';

	export let monitor: IMonitor;

	let currentIndex = monitor.index;
</script>

<Wrapper>
	<IconButton
		aria-label="Swap Monitors"
		class="material-icons swap-button"
		on:click={() =>
			monitors.update((ms) => {
				ms[currentIndex].index--;
				ms[currentIndex - 1].index++;
				ms.sort((a, b) => a.index - b.index);
				return ms;
			})}
	>
		swap_horiz
	</IconButton>
	<Tooltip>Swap Monitors</Tooltip>
</Wrapper>

<style>
	:global(.swap-button) {
		position: absolute;
		top: 0;
		left: -2.25rem;
	}
</style>
