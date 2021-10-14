<script lang="ts">
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  export let monitor: IMonitor;

  const labels = {
    hdr: 'HDR',
    srgb: 'sRGB',
    curved: 'Curved',
    webcam: 'Webcam',
    touch: 'Touch',
    speakers: 'Speakers'
  };
</script>

<h5>Features</h5>
<div>
  {#each Object.entries(monitor.features) as featureEntry}
    <FormField>
      <Checkbox
        value={featureEntry[0]}
        bind:checked={featureEntry[1]}
        on:change={() =>
          monitors.update((ms) => {
            ms[monitor.index].features[featureEntry[0]] = featureEntry[1];
            return ms;
          })}
      />
      <span slot="label">{labels[featureEntry[0]]}</span>
    </FormField>
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: auto auto auto;
  }
</style>
