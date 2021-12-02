<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  import { inputUnits } from '../../stores/SettingsStore';

  export let monitor: IMonitor;
</script>

<TextField
  bind:value={monitor.diagonal}
  input$max={$inputUnits === 'Metric' ? 500 : 200}
  input$min="1"
  input$name={`diagonal${monitor.index}`}
  input$step="1"
  label="Diagonal"
  on:change={() => monitors.set($monitors)}
  required
  suffix={$inputUnits === 'Metric' ? 'cm' : 'in'}
  type="number"
  variant="filled"
/>
