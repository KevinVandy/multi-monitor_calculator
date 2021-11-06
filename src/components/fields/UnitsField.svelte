<script lang="ts">
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';
  import { Label } from '@smui/common'; 
  import { units } from '../../stores/SettingsStore';
</script>

<div>
  <Label>Stat Units</Label>
  {#each ['Imperial', 'Metric'] as option}
    <FormField>
      <Radio bind:group={$units} value={option} touch />
      <span slot="label">{option}</span>
    </FormField>
  {/each}
</div>
