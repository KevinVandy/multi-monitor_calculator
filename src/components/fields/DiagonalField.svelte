<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';

  export let monitor: IMonitor;
</script>

<TextField
  bind:value={monitor.diagonal}
  label="Diagonal"
  on:change={() => monitors.set($monitors)}
  step="1"
  type="number"
  variant="filled"
/>
