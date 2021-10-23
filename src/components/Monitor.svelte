<script lang="ts">
  import { fade } from 'svelte/transition';
  import { monitors, scale } from '../stores/SetupStore';
  import { calcScreenHeight, calcScreenWidth, calcTheta } from '../utils/calc';
  import { draggable } from 'svelte-drag';
  import type { IMonitor } from 'src/utils/interfaces';

  export let monitor: IMonitor;

  $: theta = calcTheta(
    monitor.resolution.horizontal,
    monitor.resolution.vertical
  );
  $: width =
    $scale * calcScreenWidth(monitor.diagonal, monitor.orientation, theta);
  $: height =
    $scale * calcScreenHeight(monitor.diagonal, monitor.orientation, theta);
  $: bezelWidth = (monitor.bezelWidth * $scale) / 2;
</script>

<div
  transition:fade={{ duration: 200 }}
  use:draggable={{
    bounds: 'main',
    defaultPosition: { x: monitor.offsetX, y: monitor.offsetY }
  }}
  on:svelte-drag:end={(e) =>
    monitors.update((ms) => {
      ms[monitor.index].offsetX = e.detail.offsetX;
      ms[monitor.index].offsetY = e.detail.offsetY;
      return ms;
    })}
>
  <div
    class="monitor-screen"
    style="--monitorBorderRadius:{0.1875 *
      $scale}px;--bezelColor:{monitor.bezelColor};--bezelWidth:{bezelWidth}px;--screenHeight:{height}px;--screenWidth:{width}px"
  >
    {#if monitor.previewMode === 'off'}
      <div>{monitor.index + 1}</div>
    {:else if monitor.previewMode === 'wallpaper' && monitor.wallpaper && height && width}
      <img
        class="monitor-wallpaper"
        src={monitor.wallpaper}
        style="--screenHeight:{height}px;--screenWidth:{width}px"
        alt={monitor.wallpaper}
      />
    {:else}
      <div>{monitor.index + 1}</div>
    {/if}
  </div>
</div>

<style>
  .monitor-screen {
    align-content: center;
    background-image: radial-gradient(#444, #111);
    border-color: var(--bezelColor);
    border-radius: var(--monitorBorderRadius);
    border-style: solid;
    border-width: var(--bezelWidth);
    color: #fff;
    cursor: move;
    display: grid;
    height: var(--screenHeight);
    justify-content: center;
    margin: 1rem 2px;
    position: relative;
    z-index: 99;
    min-width: var(--screenWidth);
    transition-property: height, width, border;
    transition: all 300ms ease;
    width: var(--screenWidth);
  }

  .monitor-wallpaper {
    height: var(--screenHeight);
    object-fit: cover;
    transition-property: height, width, border;
    transition: all 300ms ease;
    width: var(--screenWidth);
  }
</style>
