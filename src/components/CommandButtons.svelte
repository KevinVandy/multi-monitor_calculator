<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import IconButton from '@smui/icon-button';
  import Snackbar, {
    Actions as SnackbarActions,
    Label,
    SnackbarComponentDev
  } from '@smui/snackbar';
  import {
    monitors,
    scale,
    getNewMonitor,
    id,
    deskWidth,
    deskHeight
  } from '../stores/SetupStore';
  import { encodeSetupToUrl } from '../utils/linkGenerator';
  import ConfirmResetSetupDialog from './dialogs/ConfirmResetSetupDialog.svelte';

  let copiedToClipboardSnackbar: SnackbarComponentDev;
  let confirmResetDialogOpen = false;

  const handleAddMonitor = () => {
    monitors.update((ms) => [...ms, getNewMonitor(ms.length)]);
  };

  const handleGenerateLink = () => {
    const newSearchString = encodeSetupToUrl($monitors, $scale, $id);
    const newUrl = `${location.origin}${location.pathname}?${newSearchString}`;
    window.history.replaceState({ path: newUrl }, undefined, newUrl);
    navigator.clipboard.writeText(location.href);
    copiedToClipboardSnackbar.open();
    setTimeout(() => copiedToClipboardSnackbar.close(), 5000);
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
  <Wrapper>
    <Fab
      class="fab-button"
      color="primary"
      extended
      on:click={handleGenerateLink}
    >
      <Icon class="material-icons">link</Icon>Share Link
    </Fab>
    <Tooltip
      >Generate a link to this setup that you can use to send to your other
      devices or friends</Tooltip
    >
  </Wrapper>
</div>
<div class="zoom-button-container">
  <Wrapper>
    <Fab color="secondary" on:click={() => $scale > 1 && $scale--}>
      <Icon class="material-icons">zoom_out</Icon>
    </Fab>
    <Tooltip>Zoom out</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab color="secondary" on:click={() => $scale < 32 && $scale++}>
      <Icon class="material-icons">zoom_in</Icon>
    </Fab>
    <Tooltip>Zoom in</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab
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
      color="secondary"
      on:click={() => $deskHeight > 1 && ($deskHeight -= 0.25)}
    >
      <Icon class="material-icons">unfold_less</Icon>
    </Fab>
    <Tooltip>Decrease Available Desk Height</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab
      color="secondary"
      on:click={() => $deskHeight < 6 && ($deskHeight += 0.25)}
    >
      <Icon class="material-icons">unfold_more</Icon>
    </Fab>
    <Tooltip>Increase Available Desk Height</Tooltip>
  </Wrapper>
</div>

<ConfirmResetSetupDialog bind:confirmResetDialogOpen />

<Snackbar bind:this={copiedToClipboardSnackbar}>
  <Label>URL Copied to Clipboard!</Label>
  <SnackbarActions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </SnackbarActions>
</Snackbar>

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
