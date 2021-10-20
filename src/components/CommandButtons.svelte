<script lang="ts">
  import queryString from 'query-string';
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
  import type { IMonitor } from 'src/utils/interfaces';

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

  const handleGenerageLink = () => {
    const newSearchString = queryString.stringify(
      Object.assign(
        {},
        ...$monitors.map((m: IMonitor, i: number) => ({
          [`a${i}`]: m.aspectRatio,
          [`d${i}`]: m.diagonal,
          [`h${i}`]: m.resolution.horizontal,
          [`o${i}`]: m.orientation,
          [`r${i}`]: m.refreshRate,
          [`s${i}`]: m.resolution.standard,
          [`t${i}`]: m.responseTime,
          [`v${i}`]: m.resolution.vertical,
          [`x${i}`]: m.offsetX,
          [`y${i}`]: m.offsetY
        }))
      )
    );
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
    extended
    color="primary"
    on:click={handleRemoveMonitor}
  >
    <Icon class="material-icons">remove</Icon>Remove
  </Fab>
  <Fab class="fab-button" extended color="primary" on:click={handleAddMonitor}>
    <Icon class="material-icons">add</Icon>Add
  </Fab>
  <Fab
    class="fab-button"
    extended
    color="primary"
    on:click={handleGenerageLink}
  >
    <Icon class="material-icons">link</Icon>Generate Link
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
  }

  :global(.fab-button) {
    min-width: 8rem;
  }
</style>
