<script lang="ts">
	import Paper, { Content } from '@smui/paper';
</script>

<main>
	<Paper class="about">
		<Content>
			Calculate PPI, Preview Custom Desktop Wallpapers, Drag and Rearrange Monitors to Try Out
			Different Layouts, Intelligently search for your dream monitor, and much more.
		</Content>
		<Content>
			A Kevin Vandy Tool - <a target="_blank" rel="no opener" href="https://www.kevinvancott.com"
				>kevinvancott.com
			</a>
		</Content>
		<Content>
			View the Source Code on <a
				target="_blank"
				rel="no opener"
				href="https://github.com/KevinVandy/multi-monitor_calculator">Github</a
			>
		</Content>
		<Content>
			If you find a bug or want to submit a feature request, feel free to submit an issue on the
			github <a
				target="_blank"
				rel="no opener"
				href="https://github.com/KevinVandy/multi-monitor_calculator/issues">issues</a
			> tab
		</Content>
		<Content>
			Made with <a target="_blank" rel="no opener" href="https://kit.svelte.dev/">SvelteKit</a>
			and
			<a target="_blank" rel="no opener" href="https://sveltematerialui.com/"
				>Svelte Material UI (SMUI)</a
			>
		</Content>
	</Paper>
</main>

<style>
	:global(.about) {
		display: grid;
		gap: 1rem;
		margin: 2rem auto;
		max-width: 90ch;
		padding: 1.5rem;
	}
</style>
