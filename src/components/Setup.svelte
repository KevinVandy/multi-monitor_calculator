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

  onMount(() => {
    monitors.set(
      JSON.parse(localStorage.getItem('monitors')) ?? [getNewMonitor()]
    );
    deskWidth.set(JSON.parse(localStorage.getItem('deskWidth')) ?? 6);
    scale.set(JSON.parse(localStorage.getItem('scale')) ?? 16);
  });

  afterUpdate(() => {
    monitors.subscribe((ms) =>
      localStorage.setItem('monitors', JSON.stringify(ms))
    );
    deskWidth.subscribe((dw) =>
      localStorage.setItem('deskWidth', JSON.stringify(dw))
    );
    scale.subscribe((s) => localStorage.setItem('scale', JSON.stringify(s)));
  });
</script>

<CommandButtons />
<Desk />
<MonitorOptionsArea />
