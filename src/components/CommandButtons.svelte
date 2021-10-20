<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import {
    monitors,
    scale,
    deskWidth,
    getNewMonitor,
    deskHeight
  } from '../stores/SetupStore';

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
</script>

<div class="fab-grid">
  <Fab extended color="primary" on:click={handleReset}>
    <Icon class="material-icons">undo</Icon>Reset
  </Fab>
  <Fab extended color="primary" on:click={handleAddMonitor}>
    <Icon class="material-icons">add</Icon>Add
  </Fab>
  <Fab extended color="primary" on:click={handleRemoveMonitor}>
    <Icon class="material-icons">remove</Icon>Remove
  </Fab>
</div>

<style>
  .fab-grid {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
  }
</style>
