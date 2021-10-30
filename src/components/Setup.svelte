<script lang="ts">
  import queryString from 'query-string';
  import {
    deskHeight,
    deskWidth,
    id,
    lastOpened,
    monitors,
    mostRecentSetupId,
    scale,
    setups
  } from '../stores/SetupStore';
  import { preferredSearchEngine } from '../stores/SettingsStore';
  import { afterUpdate, onMount } from 'svelte';
  import CircularProgress from '@smui/circular-progress';
  import CommandButtons from './CommandButtons.svelte';
  import Desk from './Desk.svelte';
  import MonitorOptionsArea from './MonitorOptionsArea.svelte';
  import type { ISettings, ISetup, ISetups } from '../utils/interfaces';
  import { parseSetupFromUrl } from '../utils/linkGenerator';

  let loading = true;

  onMount(() => {
    //load settings from local storage
    const storedSettings: ISettings = JSON.parse(
      localStorage.getItem('settings')
    );
    if (storedSettings) {
      preferredSearchEngine.set(storedSettings.preferredSearchEngine);
    }

    //load most recent setup id from local storage
    const storedSetupId: string | null =
      localStorage.getItem('mostRecentSetupId');
    if (storedSetupId) {
      mostRecentSetupId.set(storedSetupId);
    }

    //load setups from local storage
    const storedSetups: ISetups = JSON.parse(localStorage.getItem('setups'));
    if (storedSetups) {
      setups.set(storedSetups ?? {});
    }

    //check for setup in URL
    const urlSetup = queryString.parse(location.search) as {
      [key: string]: string | number;
    };
    if (Object.keys(urlSetup).length > 0) {
      //set setup store from url
      monitors.set(parseSetupFromUrl(urlSetup));
      const newUrl = `${location.origin}${location.pathname}`;
      window.history.replaceState({ path: newUrl }, undefined, newUrl);
    } else if (storedSetups) {
      //load most recent setup as current setup
      let mostRecentSetup: ISetup = storedSetups[$mostRecentSetupId];
      if (!mostRecentSetup && Object.keys(storedSetups).length > 0) {
        //sort setups by date and load most recent
        const sortedSetups: ISetup[] = Object.values(storedSetups).sort(
          (a: ISetup, b: ISetup) =>
            new Date(a.lastOpened).getTime() - new Date(b.lastOpened).getTime()
        );
        mostRecentSetup = sortedSetups[0];
      }
      deskHeight.set(mostRecentSetup.deskHeight);
      deskWidth.set(mostRecentSetup.deskWidth);
      id.set(mostRecentSetup.id);
      lastOpened.set(mostRecentSetup.lastOpened);
      monitors.set(mostRecentSetup.monitors);
      scale.set(mostRecentSetup.scale);
    }

    //make scale more mobile friendly
    if (window.matchMedia('(max-width: 480px)').matches) {
      scale.set(Math.min($scale, 10));
    }

    loading = false;
  });

  afterUpdate(() => {
    //cache settings
    localStorage.setItem(
      'settings',
      JSON.stringify({
        preferredSearchEngine: $preferredSearchEngine
      })
    );

    //update current setup
    $setups[$id] = {
      deskHeight: $deskHeight,
      deskWidth: $deskWidth,
      id: $id,
      lastOpened: new Date(),
      monitors: $monitors,
      scale: $scale
    };

    //cache setups
    localStorage.setItem('setups', JSON.stringify($setups));

    //store current setup id as most recent setp
    localStorage.setItem('mostRecentSetupId', $id);
  });
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
    padding-bottom: 20rem;
  }
</style>
