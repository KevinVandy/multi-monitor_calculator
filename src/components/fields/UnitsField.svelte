<script lang="ts">
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';
  import { Label } from '@smui/common';
  import { inputUnits, statUnits } from '../../stores/SettingsStore';
  import { monitors } from '../../stores/SetupStore';

  const onInputUnitsChange = (event) => {
    const convert = event.target.value === 'Metric' ? 2.54 : 1 / 2.54;
    $monitors.forEach((monitor) => {
      monitor.diagonal = Math.round(monitor.diagonal * convert);
    });
    monitors.set($monitors);
  };
</script>

<div>
  <Label>Input Units</Label>
  {#each ['Imperial', 'Metric'] as option}
    <FormField>
      <Radio
        on:change={onInputUnitsChange}
        bind:group={$inputUnits}
        value={option}
        touch
      />
      <span slot="label">{option}</span>
    </FormField>
  {/each}
</div>
<div>
  <Label>Stat Units</Label>
  {#each ['Imperial', 'Metric'] as option}
    <FormField>
      <Radio bind:group={$statUnits} value={option} touch />
      <span slot="label">{option}</span>
    </FormField>
  {/each}
</div>
