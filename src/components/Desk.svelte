<script lang="ts">
  import Card from '@smui/card';
  import IconButton from '@smui/icon-button';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import { deskWidth, scale, monitors, deskHeight } from '../stores/SetupStore';
  import DeskSizeDialog from './DeskSizeDialog.svelte';
  import Monitor from './Monitor.svelte';
</script>

<Card
  --desk-card-height="{$deskHeight * 12 * $scale}px"
  --desk-card-width="{$deskWidth * 12 * $scale}px"
  --desk-card-justify={$monitors.length === 1 ? 'center' : 'flex-start'}
  class="desk-card"
>
  {#each $monitors as monitor}
    <Monitor {monitor} />
  {/each}
  <div class="zoom-button-container">
    <Wrapper>
      <IconButton
        on:click={() => $scale > 1 && $scale--}
        class="material-icons"
      >
        zoom_out
      </IconButton>
      <Tooltip>Zoom Out</Tooltip>
    </Wrapper>
    <Wrapper>
      <IconButton
        on:click={() => $scale < 32 && $scale++}
        class="material-icons"
      >
        zoom_in
      </IconButton>
      <Tooltip>Zoom In</Tooltip>
    </Wrapper>
  </div>
  <div
    class="desk-size-adjuster-container"
    title="Change Desk Width and Height"
  >
    <Wrapper>
      <DeskSizeDialog />
      <Tooltip>Change Desk Width and Height</Tooltip>
    </Wrapper>
  </div>
</Card>

<style>
  :global(.desk-card) {
    display: flex;
    flex-direction: row;
    height: var(--desk-card-height);
    justify-content: var(--desk-card-justify);
    margin: 2rem auto;
    max-width: calc(100vw - 1rem);
    min-height: 100px;
    overflow: visible;
    padding: 3rem 1rem;
    resize: both;
    transition-property: height, width;
    transition: all 300ms ease;
    width: var(--desk-card-width);
  }

  .zoom-button-container {
    top: 0.25rem;
    display: flex;
    justify-content: center;
    margin: auto;
    position: absolute;
    width: 100%;
  }

  .desk-size-adjuster-container {
    bottom: 0.25rem;
    right: 0.25rem;
    position: absolute;
  }

  @media (max-width: 600px) {
    :global(.desk-card) {
      padding: 1rem;
    }
    .zoom-button-container {
      top: -3rem;
    }
  }
</style>
