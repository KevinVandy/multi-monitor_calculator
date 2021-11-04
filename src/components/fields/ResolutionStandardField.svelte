<script lang="ts">
  import Select, { Option } from '@smui/select';
  import { calcResolution } from '../../utils/calc';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  export let monitor: IMonitor;
</script>

<Select
  bind:value={monitor.resolution.standard}
  label="Resolution Standard"
  input$name={`resolutionStandard${monitor.index}`}
  on:MDCSelect:change={() => {
    [monitor.resolution.horizontal, monitor.resolution.vertical] =
      calcResolution(monitor.aspectRatio, monitor.resolution.standard) ?? [
        monitor.resolution.horizontal,
        monitor.resolution.vertical
      ];
    monitors.set($monitors);
  }}
  variant="filled"
>
  <Option value="POTATO" style="display: none">Potato</Option>
  <Option value="VGA">VGA</Option>
  <Option value="HD">
    <b>HD</b>
  </Option>
  <Option value="HD+">HD+</Option>
  <Option value="FHD">
    <b>FHD</b>
  </Option>
  <Option value="FHD+">FHD+</Option>
  <Option value="QHD">
    <b>QHD</b>
  </Option>
  <Option value="QHD+">QHD+</Option>
  <Option value="4K">
    <b>4K</b>
  </Option>
  <Option value="5K">5K</Option>
  <Option value="8K">8K</Option>
</Select>
