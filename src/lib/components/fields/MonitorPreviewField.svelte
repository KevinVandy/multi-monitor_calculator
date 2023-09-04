<script lang="ts">
	import { slide } from 'svelte/transition';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import Switch from '@smui/switch';
	import FormField from '@smui/form-field';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import { Label } from '@smui/common';
	import type { IMonitor } from '$lib/utils/interfaces';
	import { monitors } from '$lib/stores/SetupStore';
	import WallpaperField from './WallpaperField.svelte';
	import { Link } from '@smui/tooltip';

	export let monitor: IMonitor;

	let choices = ['wallpaper', 'movie', 'tv', 'doc', 'apple', 'windows'];

	let choiceLabelMap: Record<
		string,
		{
			icon: string;
			tooltip: string;
		}
	> = {
		wallpaper: { icon: 'wallpaper', tooltip: 'Try out your own wallpaper' },
		movie: { icon: '🎬', tooltip: 'Visualize Movie Black Bars' },
		tv: { icon: '📺', tooltip: 'Visualize TV/Video Black Bars' },
		doc: { icon: '📄', tooltip: 'Visualize Vertical Applications' },
		apple: { icon: '🍎', tooltip: 'Simulate MacOS!' },
		windows: { icon: '🪟', tooltip: 'Simulate Windows 11!' },
	};
</script>

<div class="container">
	<FormField align="end">
		<Switch
			bind:checked={monitor.on}
			color="primary"
			on:SMUISwitch:change={() => monitors.set($monitors)}
		/>
		<span slot="label">Turn Monitor {monitor.on ? 'Off' : 'On'}</span>
	</FormField>
	{#if monitor.on}
		<div class="button-container" transition:slide>
			<SegmentedButton
				bind:selected={monitor.previewMode}
				let:segment
				on:change={() => monitors.set($monitors)}
				segments={choices}
				singleSelect
			>
				<Segment {segment}>
					<Wrapper>
						<Label title={segment}>
							{choiceLabelMap[segment].icon}
						</Label>
						<Tooltip>{choiceLabelMap[segment].tooltip}</Tooltip>
					</Wrapper>
				</Segment>
			</SegmentedButton>
			{#if monitor.previewMode === 'wallpaper'}
				<div transition:slide>
					<WallpaperField {monitor} />
				</div>
			{:else if monitor.previewMode === 'apple'}
				<div transition:slide>
					<p>
						<Link href="https://macos.vercel.app/" target="_blank" rel="noopener">
							MacOS Simulator
						</Link> made by <Link
							href="https://twitter.com/puruvjdev"
							target="_blank"
							rel="noopener"
						>
							Puru Vijay
						</Link>
					</p>
				</div>
			{:else if monitor.previewMode === 'windows'}
				<div transition:slide>
					<p>
						<Link href="https://win11.vercel.app/" target="_blank" rel="noopener">
							Windows 11 Simulator
						</Link> made by <Link
							href="https://twitter.com/Piyushsthr"
							target="_blank"
							rel="noopener"
						>
							Piyush Suthar
						</Link>
					</p>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		text-align: center;
	}

	.button-container {
		display: grid;
		margin: 1rem auto;
		gap: 1rem;
	}
</style>
