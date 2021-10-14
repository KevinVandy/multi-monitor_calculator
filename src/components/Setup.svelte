<script lang="ts">
  import {
    deskWidth,
    getNewMonitor,
    monitors,
    scale
  } from '../stores/SetupStore';
  import { afterUpdate, onMount } from 'svelte';
  import CommandButtons from './CommandButtons.svelte';
  import Desk from './Desk.svelte';
  import MonitorOptionsArea from './MonitorOptionsArea.svelte';
  import type { ISetup } from 'src/utils/interfaces';

  onMount(() => {
    const storedSetup: ISetup | null = JSON.parse(
      localStorage.getItem('setup')
    );
    if (storedSetup) {
      monitors.set(storedSetup.monitors ?? [getNewMonitor()]);
      deskWidth.set(storedSetup.deskWidth ?? 6);
      scale.set(storedSetup.scale ?? 16);
    }
  });

  afterUpdate(() =>
    localStorage.setItem(
      'setup',
      JSON.stringify({
        scale: $scale,
        deskWidth: $deskWidth,
        monitors: $monitors
      })
    )
  );
</script>

<CommandButtons />
<Desk />
<MonitorOptionsArea />
