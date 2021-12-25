<script lang="ts">
  import { slide } from 'svelte/transition';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import SegmentedButton, { Segment } from '@smui/segmented-button';
  import { Icon, Label } from '@smui/common';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  import WallpaperField from './WallpaperField.svelte';
  import { Link } from '@smui/tooltip';

  export let monitor: IMonitor;

  let choices = [
    {
      name: 'wallpaper',
      icon: 'wallpaper',
      tooltip: 'Try out your own wallpaper'
    },
    { name: 'movie', icon: '🎬', tooltip: 'Visualize Movie Black Bars' },
    { name: 'tv', icon: '📺', tooltip: 'Visualize TV/Video Black Bars' },
    { name: 'doc', icon: '📄', tooltip: 'Visualize Vertical Applications' },
    { name: 'apple', icon: '🍎', tooltip: 'Simulate MacOS!' },
    // { name: 'windows', icon: '🪟', tooltip: "Simulate Windows 11!" }
  ];

  const handlePreviewModeSwitchChange = (event) => {
    monitor.previewMode = event.target.checked
      ? { name: 'wallpaper', icon: 'wallpaper' }
      : null;
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
    <span slot="label">Turn Monitor {monitor.previewMode ? 'Off' : 'On'}</span>
  </FormField>
  {#if !!monitor.previewMode}
    <div class="button-container" transition:slide>
      <SegmentedButton
        bind:selected={monitor.previewMode}
        let:segment
        on:change={() => monitors.set($monitors)}
        segments={choices}
        singleSelect
      >
        <Segment {segment}>
          <Wrapper>
            <Label title={segment.name}>
              {segment.icon}
            </Label>
            <Tooltip>{segment.tooltip}</Tooltip>
          </Wrapper>
        </Segment>
      </SegmentedButton>
      {#if monitor.previewMode.name === 'wallpaper'}
        <div transition:slide>
          <WallpaperField {monitor} />
        </div>
      {:else if monitor.previewMode.name === 'apple'}
        <div transition:slide>
          <p>
            <Link
              href="https://macos.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              MacOS Simulator
            </Link> made by <Link
              href="https://twitter.com/puruvjdev"
              target="_blank"
              rel="noopener"
            >
              Puru Vijay
            </Link>
          </p>
        </div>
      {:else if monitor.previewMode.name === 'windows'}
        <div transition:slide>
          <p>
            <Link
              href="https://win11.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              Windows 11 Simulator
            </Link> made by <Link
              href="https://twitter.com/Piyushsthr"
              target="_blank"
              rel="noopener"
            >
              Piyush Suthar
            </Link>
          </p>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .container {
    width: 100%;
    text-align: center;
  }

  .button-container {
    display: grid;
    margin: 1rem auto;
    gap: 1rem;
  }
</style>
