<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import {
    expandAdvancedOptionsByDefault,
    expandStatsByDefault
  } from '../../stores/SettingsStore';
</script>

<FormField align="end" style="justify-content:space-between;">
  <Switch bind:checked={$expandAdvancedOptionsByDefault} color="primary" />
  <span slot="label">Expand Advanced Options By Default</span>
</FormField>
<FormField align="end" style="justify-content:space-between;">
  <Switch bind:checked={$expandStatsByDefault} color="primary" />
  <span slot="label">Expand Stats By Default</span>
</FormField>
