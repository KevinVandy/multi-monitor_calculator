<script lang="ts">
	export let srcWebp: string | undefined = undefined;
	export let srcPng: string | undefined = undefined;
	export let lazy: boolean = false;
	export let alt: string = '';
</script>

<picture>
	{#if srcWebp}
		<source srcset={srcWebp} type="image/webp" />
	{/if}
	{#if srcPng}
		<source srcset={srcPng} type="image/png" />
	{/if}
	<img {alt} loading={lazy ? 'lazy' : 'eager'} src={srcPng} {...$$restProps} />
</picture>
