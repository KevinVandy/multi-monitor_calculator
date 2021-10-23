<script lang="ts">
  import { monitors } from '../stores/SetupStore';
  import MonitorOptions from './MonitorOptions.svelte';

  let advancedOptionsOpen: boolean = false;
  let statsOpen: boolean = true;
</script>

<div>
  {#each $monitors as monitor}
    <MonitorOptions bind:advancedOptionsOpen bind:statsOpen {monitor} />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    z-index: 1;
  }
</style>
