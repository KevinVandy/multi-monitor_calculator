<script lang="ts">
  import Card from '@smui/card';
  import IconButton from '@smui/icon-button';
  import { deskWidth, scale, monitors, deskHeight } from '../stores/SetupStore';
  import DeskSettingsDialog from './DeskSettingsDialog.svelte';
  import Monitor from './Monitor.svelte';

  let settingsDialogOpen = false;
</script>

<Card
  class="desk-card mdc-elevation--z24"
  style="--desk-card-width:{$deskWidth *
    12 *
    $scale}px; --desk-card-height:{$deskHeight *
    12}rem; --desk-card-minHeight:{$scale + 5}rem;"
>
  {#each $monitors as monitor}
    <Monitor {monitor} />
  {/each}
  <IconButton
    on:click={() => (settingsDialogOpen = true)}
    class="material-icons settings-toggle">settings</IconButton
  >
</Card>
<DeskSettingsDialog bind:settingsDialogOpen />

<style>
  :global(.desk-card) {
    display: flex;
    flex-direction: row;
    height: var(--desk-card-height);
    justify-content: center;
    margin: 2rem auto;
    max-height: 50rem;
    min-height: var(--desk-card-minHeight);
    overflow: visible;
    padding: 1rem;
    resize: vertical;
    width: var(--desk-card-width);
  }

  :global(.settings-toggle) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
