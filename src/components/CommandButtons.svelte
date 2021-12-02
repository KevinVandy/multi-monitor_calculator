<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import { inputUnits } from '../stores/SettingsStore';
  import {
    monitors,
    scale,
    getNewMonitor,
    deskWidth,
    deskHeight
  } from '../stores/SetupStore';
  import ConfirmResetSetupDialog from './dialogs/ConfirmResetSetupDialog.svelte';
  import ShareLinkButton from './ShareLinkButton.svelte';

  let confirmResetDialogOpen = false;

  const handleAddMonitor = () => {
    monitors.update((ms) => [
      ...ms,
      getNewMonitor(
        ms.length,
        $inputUnits === 'Metric' ? Math.round(27 * 2.54) : 27
      )
    ]);
  };
</script>

<div class="fab-grid">
  <Wrapper>
    <Fab
      class="fab-button"
      extended
      color="primary"
      on:click={() => (confirmResetDialogOpen = true)}
    >
      <Icon class="material-icons">undo</Icon>Reset
    </Fab>
    <Tooltip>Reset Back To Default Setup</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab
      class="fab-button"
      color="primary"
      disabled={$monitors.length >= 10}
      extended
      on:click={handleAddMonitor}
    >
      <Icon class="material-icons">add_to_queue</Icon>Add
    </Fab>
    <Tooltip>Add Another Monitor</Tooltip>
  </Wrapper>
  <ShareLinkButton />
</div>
<div class="zoom-button-container">
  <Wrapper>
    <Fab
      aria-label="Zoom Out"
      color="secondary"
      on:click={() => $scale > 1 && $scale--}
    >
      <Icon class="material-icons">zoom_out</Icon>
    </Fab>
    <Tooltip>Zoom Out</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab
      aria-label="Zoom In"
      color="secondary"
      on:click={() => $scale < 32 && $scale++}
    >
      <Icon class="material-icons">zoom_in</Icon>
    </Fab>
    <Tooltip>Zoom In</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab
      aria-label="Decrease Available Desk Width"
      color="secondary"
      on:click={() => $deskWidth > 2 && ($deskWidth -= 0.5)}
    >
      <Icon class="material-icons" style="transform:rotate(90deg);">
        unfold_less
      </Icon>
    </Fab>
    <Tooltip>Decrease Available Desk Width</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab
      aria-label="Increase Available Desk Width"
      color="secondary"
      on:click={() => $deskWidth < 12 && ($deskWidth += 0.5)}
    >
      <Icon class="material-icons" style="transform:rotate(90deg);">
        unfold_more
      </Icon>
    </Fab>
    <Tooltip>Increase Available Desk Width</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab
      aria-label="Decrease Available Desk Height"
      color="secondary"
      on:click={() => $deskHeight > 1 && ($deskHeight -= 0.25)}
    >
      <Icon class="material-icons">unfold_less</Icon>
    </Fab>
    <Tooltip>Decrease Available Desk Height</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab
      aria-label="Increase Available Desk Height"
      color="secondary"
      on:click={() => $deskHeight < 6 && ($deskHeight += 0.25)}
    >
      <Icon class="material-icons">unfold_more</Icon>
    </Fab>
    <Tooltip>Increase Available Desk Height</Tooltip>
  </Wrapper>
</div>

<ConfirmResetSetupDialog bind:confirmResetDialogOpen />

<style>
  .fab-grid {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
    flex-wrap: wrap;
  }

  :global(.fab-button) {
    min-width: 7rem;
  }

  .zoom-button-container {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 100%;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    .fab-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0.5rem;
    }

    .zoom-button-container {
      gap: 0.5rem;
    }
  }
</style>
