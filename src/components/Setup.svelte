<script lang="ts">
  import queryString from 'query-string';
  import {
    deskHeight,
    deskWidth,
    getNewMonitor,
    monitors,
    scale
  } from '../stores/SetupStore';
  import { afterUpdate, onMount } from 'svelte';
  import CircularProgress from '@smui/circular-progress';
  import CommandButtons from './CommandButtons.svelte';
  import Desk from './Desk.svelte';
  import MonitorOptionsArea from './MonitorOptionsArea.svelte';
  import type { IMonitor, ISetup } from 'src/utils/interfaces';

  let loading = true;

  onMount(() => {
    const urlSetup = queryString.parse(location.search);
    if (Object.keys(urlSetup).length > 0) {
      const parsedMonitors: IMonitor[] = [];
      let i = 0;
      while (urlSetup[`a${i}`] && i < 10) {
        parsedMonitors.push({
          ...getNewMonitor(i),
          aspectRatio: urlSetup[`a${i}`].toString(),
          diagonal: +urlSetup[`d${i}`],
          refreshRate: +urlSetup[`r${i}`],
          responseTime: +urlSetup[`t${i}`],
          resolution: {
            horizontal: +urlSetup[`h${i}`],
            standard: urlSetup[`s${i}`].toString(),
            vertical: +urlSetup[`v${i}`]
          },
          offsetX: +urlSetup[`x${i}`],
          offsetY: +urlSetup[`y${i}`],
          orientation: urlSetup[`o${i}`].toString() as 'l' | 'p'
        });
        i++;
      }
      monitors.set(parsedMonitors);
      const newUrl = `${location.origin}${location.pathname}`;
      window.history.replaceState({ path: newUrl }, undefined, newUrl);
    } else {
      const storedSetup: ISetup | null = JSON.parse(
        localStorage.getItem('setup')
      );
      if (storedSetup) {
        monitors.set(storedSetup.monitors ?? [getNewMonitor()]);
        deskWidth.set(storedSetup.deskWidth ?? 6);
        scale.set(storedSetup.scale ?? 16);
      }
    }
    loading = false;
  });

  afterUpdate(() =>
    localStorage.setItem(
      'setup',
      JSON.stringify({
        deskHeight: $deskHeight,
        deskWidth: $deskWidth,
        monitors: $monitors,
        scale: $scale
      })
    )
  );
</script>

<CommandButtons />
{#if loading}
  <CircularProgress style="height: 32px; width: 32px;" indeterminate />
{:else}
  <Desk />
  <MonitorOptionsArea />
{/if}
