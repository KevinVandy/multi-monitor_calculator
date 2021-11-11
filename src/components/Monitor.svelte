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
    $scale * calcScreenWidth(monitor.diagonal, theta, monitor.orientation);
  $: height =
    $scale * calcScreenHeight(monitor.diagonal, theta, monitor.orientation);
  $: bezelWidth = (monitor.bezelWidth * $scale) / 2;

  $: {
    if (monitor.features.curved && monitor.orientation === 'l') {
      width *= 0.96;
      height *= 1.02;
    } else if (monitor.features.curved && monitor.orientation === 'p') {
      height *= 0.96;
      width *= 1.02;
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
        0}deg;--monitor-rotateZ:{monitor.orientation === 'p'
        ? '90deg'
        : 0};--monitor-offsetZ:{monitor.offsetZ ?? 0}px;"
    >
      {#if monitor.features.curved}
        <div
          class="monitor-curve {monitor.orientation === 'l'
            ? 'monitor-curve-horizontal monitor-top-curve'
            : 'monitor-curve-vertical monitor-left-curve'}"
        />
        <div
          class="monitor-curve {monitor.orientation === 'l'
            ? 'monitor-curve-horizontal monitor-bottom-curve'
            : 'monitor-curve-vertical monitor-right-curve'}"
        />
      {/if}
      {#if !monitor.previewMode}
        {#if $scale * monitor.diagonal > 150}
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

  .monitor-curve {
    background: var(--mdc-theme-surface);
    position: absolute;
  }

  .monitor-curve-horizontal {
    border-radius: 50% / 0.5rem;
    height: 1em;
    margin-left: calc(var(--bezelWidth) * -1);
    width: calc(var(--screenWidth) + calc(var(--bezelWidth) * 2));
  }

  .monitor-curve-vertical {
    border-radius: 0.5rem / 50%;
    height: calc(var(--screenHeight) + calc(var(--bezelWidth) * 2));
    margin-top: calc(var(--bezelWidth) * -1);
    width: 1em;
  }

  .monitor-top-curve {
    border-bottom-color: var(--bezelColor);
    border-bottom-style: solid;
    border-bottom-width: calc(var(--bezelWidth) / 1.25);
    top: calc(-0.5rem - var(--bezelWidth));
  }

  .monitor-bottom-curve {
    border-top-color: var(--bezelColor);
    border-top-style: solid;
    border-top-width: calc(var(--bezelWidth) / 1.25);
    bottom: calc(-0.5rem - var(--bezelWidth));
  }

  .monitor-left-curve {
    border-right-color: var(--bezelColor);
    border-right-style: solid;
    border-right-width: calc(var(--bezelWidth) / 1.25);
    left: calc(-0.5rem - var(--bezelWidth));
  }

  .monitor-right-curve {
    border-left-color: var(--bezelColor);
    border-left-style: solid;
    border-left-width: calc(var(--bezelWidth) / 1.25);
    right: calc(-0.5rem - var(--bezelWidth));
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
