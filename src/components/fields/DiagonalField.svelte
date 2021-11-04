<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';

  export let monitor: IMonitor;
</script>

<TextField
  bind:value={monitor.diagonal}
  label="Diagonal"
  input$name={`diagonal${monitor.index}`}
  on:change={() => monitors.set($monitors)}
  required
  input$min="1"
  input$max="200"
  input$step="1"
  type="number"
  variant="filled"
/>
