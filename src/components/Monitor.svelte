<script lang="ts">
  import { fade } from 'svelte/transition';
  import { monitors, scale } from '../stores/SetupStore';
  import { calcScreenHeight, calcScreenWidth, calcTheta } from '../utils/calc';
  import { draggable } from 'svelte-drag';
  import type { IMonitor } from 'src/utils/interfaces';
  import MoviePng from '../images/movie.png';
  import VideoPng from '../images/video.png';

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
    class="monitor monitor-screen"
    style="--monitorBorderRadius:{0.1875 *
      $scale}px;--bezelColor:{monitor.bezelColor};--bezelWidth:{bezelWidth}px;--screenHeight:{height}px;--screenWidth:{width}px"
  >
    {#if monitor.previewMode === 'off'}
      <div>{monitor.index + 1}</div>
    {:else}
      <img
        class="monitor {monitor.previewMode === 'wallpaper'
          ? ' monitor-wallpaper'
          : 'monitor-content'}"
        src={monitor.previewMode === 'wallpaper'
          ? monitor.wallpaper ?? 'https://wallpaperaccess.com/full/90278.jpg'
          : monitor.previewMode === 'movie'
          ? MoviePng
          : VideoPng}
        style="--screenHeight:{height}px;--screenWidth:{width}px"
        alt="Invalid Wallpaper Link"
      />
    {/if}
  </div>
</div>

<style>
  .monitor {
    height: var(--screenHeight);
    width: var(--screenWidth);
    transition-property: height, width, border;
    transition: all 300ms ease;
  }

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
    justify-content: center;
    margin: 1rem 2px;
    position: relative;
    z-index: 99;
    min-width: var(--screenWidth);
  }

  .monitor-wallpaper {
    object-fit: cover;
  }

  .monitor-content {
    object-fit: contain;
    background-color: #000;
  }
</style>
