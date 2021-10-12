<script lang="ts">
  import Select, { Option } from '@smui/select';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  export let monitor: IMonitor;
</script>

<Select
  bind:value={monitor.displayType}
  label="Display Type"
  on:MDCSelect:change={() => monitors.set($monitors)}
  variant="filled"
>
  <Option value="any">Any</Option>
  <Option value="IPS">IPS</Option>
  <Option value="TN">TN</Option>
  <Option value="VA">VA</Option>
  <Option value="OLED">OLED</Option>
</Select>
