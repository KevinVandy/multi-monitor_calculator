<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';

  export let monitor: IMonitor;
</script>

<TextField
  bind:value={monitor.wallpaper}
  label="Wallpaper Link"
  on:change={() => monitors.set($monitors)}
  step="1"
  style="width:100%;"
  type="text"
  variant="filled"
/>
