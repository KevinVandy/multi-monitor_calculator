<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import IconButton from '@smui/icon-button';
  import Snackbar, {
    Actions,
    Label,
    SnackbarComponentDev
  } from '@smui/snackbar';
  import {
    monitors,
    scale,
    deskWidth,
    getNewMonitor,
    deskHeight
  } from '../stores/SetupStore';
  import { encodeSetupToUrl } from '../utils/linkGenerator';

  let copiedToClipboardSnackbar: SnackbarComponentDev;

  const handleReset = () => {
    monitors.set([getNewMonitor()]);
    deskWidth.set(6);
    deskHeight.set(2);
    scale.set(16);
  };

  const handleAddMonitor = () => {
    monitors.update((ms) => [...ms, getNewMonitor(ms.length)]);
  };

  const handleRemoveMonitor = () => {
    monitors.update((ms) => {
      ms.pop();
      return ms;
    });
  };

  const handleGenerateLink = () => {
    const newSearchString = encodeSetupToUrl($monitors);
    const newUrl = `${location.origin}${location.pathname}?${newSearchString}`;
    window.history.replaceState({ path: newUrl }, undefined, newUrl);
    navigator.clipboard.writeText(location.href);
    copiedToClipboardSnackbar.open();
    setTimeout(() => copiedToClipboardSnackbar.close(), 5000);
  };
</script>

<div class="fab-grid">
  <Fab class="fab-button" extended color="primary" on:click={handleReset}>
    <Icon class="material-icons">undo</Icon>Reset
  </Fab>
  <Fab
    class="fab-button"
    color="primary"
    disabled={$monitors.length <= 0}
    extended
    on:click={handleRemoveMonitor}
  >
    <Icon class="material-icons">remove</Icon>Remove
  </Fab>
  <Fab
    class="fab-button"
    color="primary"
    disabled={$monitors.length >= 10}
    extended
    on:click={handleAddMonitor}
  >
    <Icon class="material-icons">add</Icon>Add
  </Fab>
  <Fab
    class="fab-button"
    color="primary"
    extended
    on:click={handleGenerateLink}
  >
    <Icon class="material-icons">link</Icon>Share Link
  </Fab>
</div>
<Snackbar bind:this={copiedToClipboardSnackbar}>
  <Label>URL Copied to Clipboard!</Label>
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
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
    min-width: 8rem;
  }
</style>
