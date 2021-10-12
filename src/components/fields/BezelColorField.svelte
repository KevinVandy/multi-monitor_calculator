<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';

  export let monitor: IMonitor;
</script>

<TextField
  bind:value={monitor.bezelColor}
  label="Bezel Color"
  on:change={() => monitors.set($monitors)}
  type="color"
  variant="filled"
/>
