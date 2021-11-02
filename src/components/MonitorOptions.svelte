<script lang="ts">
  import type { IMonitor } from '../utils/interfaces';
  import Card, { Content } from '@smui/card';
  import IconButton from '@smui/icon-button';
  import A from '@smui/common/elements/A.svelte';
  import { fade, slide } from 'svelte/transition';
  import DiagonalField from './fields/DiagonalField.svelte';
  import OrientationField from './fields/OrientationField.svelte';
  import AspectRatioField from './fields/AspectRatioField.svelte';
  import ResolutionStandardField from './fields/ResolutionStandardField.svelte';
  import HorizontalResolutionField from './fields/HorizontalResolutionField.svelte';
  import VerticalResolutionField from './fields/VerticalResolutionField.svelte';
  import RefreshRateField from './fields/RefreshRateField.svelte';
  import ResponseTimeField from './fields/ResponseTimeField.svelte';
  import DisplayTypeField from './fields/DisplayTypeField.svelte';
  import SyncTypeField from './fields/SyncTypeField.svelte';
  import BezelWidthField from './fields/BezelWidthField.svelte';
  import BezelColorField from './fields/BezelColorField.svelte';
  import MonitorStats from './MonitorStats.svelte';
  import PortFields from './fields/PortFields.svelte';
  import FeatureFields from './fields/FeatureFields.svelte';
  import WallpaperField from './fields/WallpaperField.svelte';
  import MonitorPreviewField from './fields/MonitorPreviewField.svelte';
  import MonitorNameField from './fields/MonitorNameField.svelte';
  import ProductLinkField from './fields/ProductLinkField.svelte';
  import { urlRegex } from '../utils/regex';
  import MonitorSearch from './MonitorSearch.svelte';

  export let monitor: IMonitor;
  export let advancedOptionsOpen: boolean;
  export let statsOpen: boolean;
</script>

<div transition:fade={{ duration: 200 }}>
  <Card class="monitor-options-card">
    <h3>
      {#if monitor.name}
        {monitor.name}
      {:else}
        Monitor {monitor.index + 1}
      {/if}
      <MonitorNameField {monitor} />
    </h3>
    <Content>
      {#if urlRegex.test(monitor.productLink) && monitor.productLink}
        <A class="product-link" href={monitor.productLink} target="_blank">
          {monitor.productLink}
        </A>
      {/if}
      <div class="options-grid-1">
        <MonitorPreviewField {monitor} />
      </div>
      <div class="options-grid-2">
        <DiagonalField {monitor} />
        <OrientationField {monitor} />
        <AspectRatioField {monitor} />
        <ResolutionStandardField {monitor} />
      </div>
      <h4 class="advanced-options-toggle">
        {advancedOptionsOpen
          ? 'Hide Advanced Options'
          : 'Show Advanced Options'}
        <IconButton
          class="material-icons"
          on:click={() => (advancedOptionsOpen = !advancedOptionsOpen)}
        >
          {advancedOptionsOpen ? 'expand_less' : 'expand_more'}
        </IconButton>
      </h4>
      {#if advancedOptionsOpen}
        <div transition:slide={{ duration: 300 }}>
          <div class="options-grid-2">
            <HorizontalResolutionField {monitor} />
            <VerticalResolutionField {monitor} />
            <RefreshRateField {monitor} />
            <ResponseTimeField {monitor} />
            <DisplayTypeField {monitor} />
            <SyncTypeField {monitor} />
            <BezelWidthField {monitor} />
            <BezelColorField {monitor} />
          </div>
          <div class="options-grid-1">
            <WallpaperField {monitor} />
            <ProductLinkField {monitor} />
          </div>
          <PortFields {monitor} />
          <FeatureFields {monitor} />
        </div>
      {/if}
      <h4 class="advanced-options-toggle">
        {statsOpen ? 'Hide Stats' : 'Show Stats'}
        <IconButton
          class="material-icons"
          on:click={() => (statsOpen = !statsOpen)}
        >
          {statsOpen ? 'expand_less' : 'expand_more'}
        </IconButton>
      </h4>
      {#if statsOpen}
        <div transition:slide={{ duration: 300 }}>
          <MonitorStats {monitor} />
        </div>
      {/if}
      <MonitorSearch {monitor} />
    </Content>
  </Card>
</div>

<style>
  h3 {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-left: 1rem;
    width: 100%;
    margin-bottom: -1rem;
  }
  :global(.monitor-options-card) {
    padding: 1rem;
    margin: 0.5rem;
    max-width: min(26rem, calc(100vw - 1rem));
    position: relative;
  }

  :global(.options-grid-1) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    margin: 1rem -0.5rem;
  }

  :global(.options-grid-2) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 11rem 11rem;
    justify-content: center;
  }

  .advanced-options-toggle {
    display: flex;
    justify-content: center;
    padding-left: 1rem;
    width: 100%;
    align-items: center;
  }

  :global(.product-link) {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 420px) {
    :global(.options-grid-2) {
      grid-template-columns: 10rem 10rem;
    }
  }
</style>
