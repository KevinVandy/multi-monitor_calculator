<script lang="ts">
  import { slide } from 'svelte/transition';
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import SegmentedButton, { Segment } from '@smui/segmented-button';
  import { Label } from '@smui/common';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  export let monitor: IMonitor;

  let choices = ['wallpaper', 'movie', 'tv', 'doc'];

  const handlePreviewModeSwitchChange = (event) => {
    monitor.previewMode = event.target.checked ? 'wallpaper' : null;
    monitors.set($monitors);
  };
</script>

<div class="container">
  <FormField align="end">
    <Switch
      checked={!!monitor.previewMode}
      color="primary"
      input$name={`monitorPreview${monitor.index}`}
      on:change={handlePreviewModeSwitchChange}
    />
    <span slot="label">Display Preview</span>
  </FormField>
  {#if monitor.previewMode}
    <div class="button-container" transition:slide>
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
  {/if}
</div>

<style>
  .container {
    width: 100%;
    text-align: center;
  }

  .button-container {
    margin: 1rem auto;
  }
</style>
