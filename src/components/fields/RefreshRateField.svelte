<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';

  export let monitor: IMonitor;
</script>

<TextField
  bind:value={monitor.refreshRate}
  label="Refresh Rate"
  input$max="1000"
  input$min="0"
  input$name={`refreshRate${monitor.index}`}
  on:change={() => monitors.set($monitors)}
  input$step="1"
  suffix="Hz"
  type="number"
  variant="filled"
/>
