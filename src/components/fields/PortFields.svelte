<script lang="ts">
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  export let monitor: IMonitor;

  const labels = {
    displayPort: 'Display Port',
    dvi: 'DVI',
    hdmi: 'HDMI',
    usbc: 'USB-C',
    vga: 'VGA'
  };
</script>

<h5>Ports</h5>
<div>
  {#each Object.entries(monitor.ports) as portEntry}
    <FormField>
      <Checkbox
        value={portEntry[0]}
        bind:checked={portEntry[1]}
        on:change={() =>
          monitors.update((ms) => {
            ms[monitor.index].ports[portEntry[0]] = portEntry[1];
            return ms;
          })}
      />
      <span slot="label">{labels[portEntry[0]]}</span>
    </FormField>
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: auto auto auto;
  }
</style>
