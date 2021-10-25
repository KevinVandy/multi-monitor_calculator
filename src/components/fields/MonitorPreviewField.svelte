<script lang="ts">
  import SegmentedButton, { Segment } from '@smui/segmented-button';
  import { Label } from '@smui/common';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  export let monitor: IMonitor;

  let choices = ['off', 'wallpaper', 'movie', 'tv', 'doc'];
</script>

<div>
  <SegmentedButton
    bind:selected={monitor.previewMode}
    let:segment
    on:change={() => monitors.set($monitors)}
    segments={choices}
    singleSelect
  >
    <Segment {segment}>
      <Label>{segment}</Label>
    </Segment>
  </SegmentedButton>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
</style>
