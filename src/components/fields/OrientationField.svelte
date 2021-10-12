<script lang="ts">
  import Select, { Option } from '@smui/select';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  export let monitor: IMonitor;
</script>

<Select
  bind:value={monitor.orientation}
  label="Orientation"
  on:MDCSelect:change={() => monitors.set($monitors)}
  variant="filled"
>
  <Option value="landscape">Landscape</Option>
  <Option value="portrait">Portrait</Option>
</Select>
