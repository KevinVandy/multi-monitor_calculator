<script lang="ts">
  import Card from '@smui/card';
  import { statUnits } from '../stores/SettingsStore';
  import { deskWidth, scale, monitors, deskHeight } from '../stores/SetupStore';
  import Monitor from './Monitor.svelte';
</script>

<span>
  {#if $statUnits === 'Metric'}
    {(($deskWidth * 12 * 2.54) / 100).toFixed(1)} m
  {:else}
    {$deskWidth.toFixed(1)} ft
  {/if}
</span>
<div style="--desk-card-width:{$deskWidth * 12 * $scale}px">
  <Card
    --desk-card-height="{$deskHeight * 12 * $scale}px"
    --desk-card-width="{$deskWidth * 12 * $scale}px"
    --desk-card-justify={$monitors.length === 1 ? 'center' : 'flex-start'}
    class="desk-card"
  >
    {#each $monitors as monitor}
      <Monitor {monitor} />
    {/each}
  </Card>
</div>

<style>
  span {
    color: var(--color-text-primary);
    text-align: center;
    margin: 1rem auto;
    display: grid;
  }

  div {
    border-top: var(--input-label-color) dashed 2px;
    width: var(--desk-card-width);
    margin: 1rem auto;
    max-width: calc(100vw - 1rem);
    transition-property: height, width;
    transition: all 300ms ease;
    display: flex;
    justify-content: flex-start;
  }

  :global(.desk-card) {
    display: flex;
    flex-direction: row;
    height: var(--desk-card-height);
    justify-content: var(--desk-card-justify);
    margin: 1rem auto;
    max-width: calc(100vw - 1rem);
    min-height: 100px;
    overflow: visible;
    padding: calc(var(--desk-card-height) * 0.1);
    transition-property: height, width;
    transition: all 300ms ease;
    width: var(--desk-card-width);
  }

  @media (max-width: 600px) {
    :global(.desk-card) {
      padding: 1rem;
    }
  }
</style>
