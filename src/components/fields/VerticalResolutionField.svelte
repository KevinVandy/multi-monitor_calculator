<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  import { calcAspectRatio } from '../../utils/calc';
  export let monitor: IMonitor;
</script>

<TextField
  bind:value={monitor.resolution.vertical}
  label="Vertical Resolution"
  max="20000"
  min="2"
  step="1"
  on:change={() => {
    monitor.aspectRatio = calcAspectRatio(
      monitor.resolution.horizontal,
      monitor.resolution.vertical
    );
    monitors.set($monitors);
  }}
  type="number"
  variant="filled"
/>
