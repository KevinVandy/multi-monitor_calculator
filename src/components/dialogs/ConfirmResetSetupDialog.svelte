<script lang="ts">
  import Dialog, {
    Content,
    Actions as DialogActions,
    Title
  } from '@smui/dialog';
  import Button from '@smui/button';
  import {
    deskHeight,
    deskWidth,
    getNewMonitor,
    monitors,
    parsedDefaultSetup,
    scale
  } from '../../stores/SetupStore';

  export let confirmResetDialogOpen = false;

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
</script>

<Dialog bind:open={confirmResetDialogOpen}>
  <Title style="text-align: left;">Are you sure?</Title>
  <Content>
    <p>Are you sure you want to reset back to the default setup?</p>
    <p>All progress will be lost!</p>
    <p>
      You can create a new setup instead by clicking the + button in the top nav
      bar
    </p>
  </Content>
  <DialogActions>
    <Button on:click={() => (confirmResetDialogOpen = false)}>
      No, Cancel
    </Button>
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
