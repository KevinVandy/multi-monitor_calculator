<script lang="ts">
  import type { IMonitor } from '../utils/interfaces';
  import Card, { Content } from '@smui/card';
  import IconButton from '@smui/icon-button';
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

  export let monitor: IMonitor;
  export let advancedOptionsOpen: boolean;
  export let statsOpen: boolean;
</script>

<div transition:fade={{ duration: 200 }}>
  <Card class="monitor-options-card">
    <h3>Monitor {monitor.index + 1}</h3>
    <Content class="options-grid-2">
      <DiagonalField {monitor} />
      <OrientationField {monitor} />
      <AspectRatioField {monitor} />
      <ResolutionStandardField {monitor} />
    </Content>
    <h4 class="advanced-options-toggle">
      Show Advanced Options <IconButton
        class="material-icons"
        on:click={() => (advancedOptionsOpen = !advancedOptionsOpen)}
      >
        {#if advancedOptionsOpen}
          expand_less
        {:else}
          expand_more
        {/if}
      </IconButton>
    </h4>
    {#if advancedOptionsOpen}
      <div transition:slide={{ duration: 300 }}>
        <Content>
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
          </div>
          <PortFields {monitor} />
          <FeatureFields {monitor} />
        </Content>
      </div>
    {/if}
    <h4 class="advanced-options-toggle">
      Show Stats <IconButton
        class="material-icons"
        on:click={() => (statsOpen = !statsOpen)}
      >
        {#if statsOpen}
          expand_less
        {:else}
          expand_more
        {/if}
      </IconButton>
    </h4>
    {#if statsOpen}
      <div transition:slide={{ duration: 300 }}>
        <Content>
          <MonitorStats {monitor} />
        </Content>
      </div>
    {/if}
  </Card>
</div>

<style>
  :global(.monitor-options-card) {
    padding: 1rem;
    margin: 0.5rem;
    max-width: 25rem;
    position: relative;
    z-index: 1;
  }

  :global(.options-grid-1) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    margin: 1rem -1rem;
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
</style>
