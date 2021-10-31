<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import IconButton from '@smui/icon-button';
  import Dialog, {
    Content,
    Actions as DialogActions,
    Title
  } from '@smui/dialog';
  import Button from '@smui/button';
  import Snackbar, {
    Actions as SnackbarActions,
    Label,
    SnackbarComponentDev
  } from '@smui/snackbar';
  import {
    monitors,
    scale,
    deskWidth,
    getNewMonitor,
    deskHeight,
    parsedDefaultSetup,
    id
  } from '../stores/SetupStore';
  import { encodeSetupToUrl } from '../utils/linkGenerator';

  let copiedToClipboardSnackbar: SnackbarComponentDev;
  let confirmResetDialogOpen = false;

  const handleReset = () => {
    monitors.set([getNewMonitor()]);
    deskWidth.set(parsedDefaultSetup.deskWidth);
    deskHeight.set(parsedDefaultSetup.deskHeight);
    scale.set(
      window.matchMedia('(max-width: 480px)').matches
        ? Math.min($scale, 10)
        : parsedDefaultSetup.scale
    );
  };

  const handleAddMonitor = () => {
    monitors.update((ms) => [...ms, getNewMonitor(ms.length)]);
  };

  const handleRemoveMonitor = () => {
    monitors.update((ms) => {
      ms.pop();
      if (ms.length === 1) {
        ms[0].offsetX = 0;
        ms[0].offsetY = 0;
      }
      return ms;
    });
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
      disabled={$monitors.length <= 0}
      extended
      on:click={handleRemoveMonitor}
    >
      <Icon class="material-icons">remove</Icon>Remove
    </Fab>
    <Tooltip>Remove Last Monitor</Tooltip>
  </Wrapper>
  <Wrapper>
    <Fab
      class="fab-button"
      color="primary"
      disabled={$monitors.length >= 10}
      extended
      on:click={handleAddMonitor}
    >
      <Icon class="material-icons">add</Icon>Add
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
    <IconButton on:click={() => $scale > 1 && $scale--} class="material-icons">
      zoom_out
    </IconButton>
    <Tooltip>Zoom Out</Tooltip>
  </Wrapper>
  <Wrapper>
    <IconButton on:click={() => $scale < 32 && $scale++} class="material-icons">
      zoom_in
    </IconButton>
    <Tooltip>Zoom In</Tooltip>
  </Wrapper>
</div>

<Dialog bind:open={confirmResetDialogOpen}>
  <Title style="text-align: left;">Are you sure?</Title>
  <Content>
    <p>Are you sure you want to reset back to the default setup?</p>
    <p>All progress will be lost!</p>
  </Content>
  <DialogActions>
    <Button on:click={() => (confirmResetDialogOpen = false)}>No, Cancel</Button
    >
    <Button
      on:click={() => {
        handleReset();
        confirmResetDialogOpen = false;
      }}
    >
      Yes, Reset
    </Button>
  </DialogActions>
</Dialog>

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
  }

  @media (max-width: 600px) {
    .fab-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
