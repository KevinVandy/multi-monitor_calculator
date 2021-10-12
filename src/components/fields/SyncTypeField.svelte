<script lang="ts">
  import Select, { Option } from '@smui/select';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  export let monitor: IMonitor;
</script>

<Select
  bind:value={monitor.syncType}
  label="Sync Type"
  on:MDCSelect:change={() => monitors.set($monitors)}
  variant="filled"
>
  <Option value="any">Any</Option>
  <Option value="none">None</Option>
  <Option value="G-Sync">G-Sync</Option>
  <Option value="FreeSync">FreeSync</Option>
</Select>
