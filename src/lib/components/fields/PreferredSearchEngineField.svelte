<script lang="ts">
	import Select, { Option } from '@smui/select';
	import { searchOptions } from '$lib/utils/searchEngine';
	import { preferredSearchEngine } from '$lib/stores/SettingsStore';
	import Image from '$lib/utils/Image.svelte';
</script>

<Select
	bind:value={$preferredSearchEngine}
	label="Preferred Search Engine"
	input$name="preferredSearchEngine"
	variant="filled"
>
	{#each [...Object.values(searchOptions.searchEngine), ...Object.values(searchOptions.store)] as searchEngine}
		<Option value={searchEngine.name}>
			<Image
				alt="{searchEngine.name} logo"
				class="se-img"
				lazy
				srcPng={searchEngine.logoPng}
				srcWebp={searchEngine.logoWebp}
			/>
			{searchEngine.name}
		</Option>
	{/each}
</Select>

<style>
	:global(.se-img) {
		padding-right: 1rem;
		width: 1.5rem;
	}
</style>
