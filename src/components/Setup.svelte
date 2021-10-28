<script lang="ts">
  import queryString from 'query-string';
  import {
    deskHeight,
    deskWidth,
    getNewMonitor,
    monitors,
    preferredSearchEngine,
    scale
  } from '../stores/SetupStore';
  import { afterUpdate, onMount } from 'svelte';
  import CircularProgress from '@smui/circular-progress';
  import CommandButtons from './CommandButtons.svelte';
  import Desk from './Desk.svelte';
  import MonitorOptionsArea from './MonitorOptionsArea.svelte';
  import type { ISetup } from 'src/utils/interfaces';
  import { parseSetupFromUrl } from '../utils/linkGenerator';

  let loading = true;

  onMount(() => {
    //check for setup in URL
    const urlSetup = queryString.parse(location.search) as {
      [x: string]: string | number;
    };
    if (Object.keys(urlSetup).length > 0) {
      //set setup store from url
      monitors.set(parseSetupFromUrl(urlSetup));
      const newUrl = `${location.origin}${location.pathname}`;
      window.history.replaceState({ path: newUrl }, undefined, newUrl);
    } else {
      //check for setup in local storage
      const storedSetup: ISetup | null = JSON.parse(
        localStorage.getItem('setup')
      );
      if (storedSetup) {
        //set setup store from local storage
        deskHeight.set(storedSetup.deskHeight ?? 2);
        preferredSearchEngine.set(storedSetup.preferredSearchEngine ?? 'google');
        deskWidth.set(storedSetup.deskWidth ?? 6);
        monitors.set(storedSetup.monitors ?? [getNewMonitor()]);
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
        preferredSearchEngine: $preferredSearchEngine,
        monitors: $monitors,
        scale: $scale
      })
    )
  );
</script>

<CommandButtons />
{#if loading}
  <div>
    <CircularProgress style="height: 64px; width: 64px;" indeterminate />
  </div>
{:else}
  <section>
    <Desk />
    <MonitorOptionsArea />
  </section>
{/if}

<style>
  div {
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-top: 3rem;
  }

  section {
    padding-bottom: 30rem;
  }
</style>
