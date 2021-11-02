<script lang="ts">
  import Card from '@smui/card';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import { deskWidth, scale, monitors, deskHeight } from '../stores/SetupStore';
  import DeskSizeDialog from './dialogs/DeskSizeDialog.svelte';
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
    padding: calc(var(--desk-card-height) * 0.1);
    resize: both;
    transition-property: height, width;
    transition: all 300ms ease;
    width: var(--desk-card-width);
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
  }
</style>
