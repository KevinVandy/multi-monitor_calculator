<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';

  export let monitor: IMonitor;
</script>

<TextField
  bind:value={monitor.responseTime}
  label="Response Time"
  input$max="100"
  input$min="0"
  input$name={`responseTime${monitor.index}`}
  on:change={() => monitors.set($monitors)}
  input$step="1"
  suffix="ms"
  type="number"
  variant="filled"
/>
