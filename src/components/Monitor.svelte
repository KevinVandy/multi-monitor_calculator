<script lang="ts">
  import { fade, blur } from 'svelte/transition';
  import { monitors, scale } from '../stores/SetupStore';
  import { calcScreenHeight, calcScreenWidth, calcTheta } from '../utils/calc';
  import { draggable } from 'svelte-drag';
  import type { IMonitor } from '../utils/interfaces';
  import { urlRegex } from '../utils/regex';
  import { docImgs, movieImgs, videoImgs } from '../utils/randomImage';
  import MonitorSwivelButtons from './MonitorSwivelButtons.svelte';

  export let monitor: IMonitor;

  if (!monitor.rotateX) monitor.rotateX = 0;
  if (!monitor.rotateY) monitor.rotateY = 0;
  if (!monitor.offsetZ) monitor.offsetZ = 0;

  $: theta = calcTheta(
    monitor.resolution.horizontal,
    monitor.resolution.vertical
  );
  $: width =
    $scale * calcScreenWidth(monitor.diagonal, monitor.orientation, theta);
  $: height =
    $scale * calcScreenHeight(monitor.diagonal, monitor.orientation, theta);
  $: bezelWidth = (monitor.bezelWidth * $scale) / 2;

  $: {
    if (monitor.features.curved) {
      width *= 0.95;
    }
  }
</script>

<div>
  <div
    transition:fade={{ duration: 200 }}
    use:draggable={{
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
      class="monitor monitor-screen monitor-move"
      class:momitor-curved={monitor.features.curved}
      style="--monitorBorderRadius:{0.1875 *
        $scale}px;--bezelColor:{monitor.bezelColor};--bezelWidth:{bezelWidth ??
        0}px;--screenHeight:{height ?? 0}px;--screenWidth:{width ??
        0}px;--monitor-rotateX:{monitor.rotateX ??
        0}deg;--monitor-rotateY:{monitor.rotateY ??
        0}deg;--monitor-offsetZ:{monitor.offsetZ ?? 0}px"
    >
      {#if monitor.features.curved}
        <div class="monitor-curve monitor-top-curve" />
        <div class="monitor-curve monitor-bottom-curve" />
      {/if}
      {#if !monitor.previewMode}
        {#if $scale > 6}
          <MonitorSwivelButtons {monitor} />
        {/if}
        <div in:blur={{ duration: 500 }}>
          {monitor.index + 1}
        </div>
      {:else}
        <img
          in:blur={{ duration: 500 }}
          class="monitor {monitor.previewMode === 'wallpaper'
            ? ' monitor-wallpaper'
            : 'monitor-content'}"
          src={monitor.previewMode === 'wallpaper'
            ? (urlRegex.test(monitor.wallpaper) && monitor.wallpaper) ||
              'https://wallpaperaccess.com/full/90278.jpg'
            : monitor.previewMode === 'movie'
            ? movieImgs[Math.min(monitor.index, movieImgs.length - 1)]
            : monitor.previewMode === 'tv'
            ? videoImgs[Math.min(monitor.index, videoImgs.length - 1)]
            : monitor.previewMode === 'doc'
            ? docImgs[Math.min(monitor.index, docImgs.length - 1)]
            : null}
          style="--screenHeight:{height}px;--screenWidth:{width}px"
          alt="Could not fetch your wallpaper link"
        />
      {/if}
    </div>
  </div>
</div>

<style>
  .monitor-move {
    transform: perspective(var(--screenWidth)) rotateX(var(--monitor-rotateX))
      rotateY(var(--monitor-rotateY)) translateZ(var(--monitor-offsetZ));
  }

  .monitor {
    height: var(--screenHeight);
    min-width: var(--screenWidth);
    transition: all 300ms ease;
    width: var(--screenWidth);
  }

  .momitor-curved {
    border-radius: 50% / calc(1rem - var(--bezelWidth));
  }

  .monitor-curve {
    background: var(--mdc-theme-surface);
    border-radius: 50% / 1rem;
    height: 2em;
    position: absolute;
    width: calc(var(--screenWidth) + calc(var(--bezelWidth) * 2));
    margin-left: calc(var(--bezelWidth) * -1);
  }

  .monitor-top-curve {
    top: calc(-1.25rem - var(--bezelWidth));
    border-bottom-style: solid;
    border-bottom-color: var(--bezelColor);
    border-bottom-width: calc(var(--bezelWidth) / 1.25);
  }

  .monitor-bottom-curve {
    bottom: calc(-1.25rem - var(--bezelWidth));
    border-top-style: solid;
    border-top-color: var(--bezelColor);
    border-top-width: calc(var(--bezelWidth) / 1.25);
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
    margin: 2px;
    z-index: 99;
  }

  .monitor-wallpaper {
    object-fit: cover;
  }

  .monitor-content {
    object-fit: contain;
    background-color: #000;
    filter: brightness(1.25);
  }
</style>
