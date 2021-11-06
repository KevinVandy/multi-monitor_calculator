<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  import { calcAspectRatio } from '../../utils/calc';

  export let monitor: IMonitor;
</script>

<TextField
  bind:value={monitor.resolution.horizontal}
  label="Horizontal Resolution"
  input$max="20000"
  input$min="2"
  input$name={`horizontalResolution${monitor.index}`}
  input$step="1"
  on:change={() => {
    monitor.aspectRatio = calcAspectRatio(
      monitor.resolution.horizontal,
      monitor.resolution.vertical
    );
    monitors.set($monitors);
  }}
  suffix="pixels"
  type="number"
  variant="filled"
/>
