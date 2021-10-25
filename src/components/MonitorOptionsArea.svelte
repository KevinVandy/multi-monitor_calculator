<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import MediaQuery from '../utils/MediaQuery.svelte';
  import { monitors } from '../stores/SetupStore';
  import MonitorOptions from './MonitorOptions.svelte';

  let advancedOptionsOpen: boolean = false;
  let statsOpen: boolean = true;

  $: tabs = $monitors.map((m) => `Monitor ${m.index + 1}`);
  let active = tabs?.[0] ?? 'Monitor 1';
  $: {
    if (!tabs.includes(active)) active = tabs[tabs.length - 1];
  }
</script>

<MediaQuery query="(max-width: 960px)" let:matches>
  {#if matches && $monitors.length > 1}
    <TabBar {tabs} let:tab bind:active>
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
    <div>
      <MonitorOptions
        bind:advancedOptionsOpen
        bind:statsOpen
        monitor={$monitors[+active.slice(-1) - 1]}
      />
    </div>
  {:else}
    <div>
      {#each $monitors as monitor}
        <MonitorOptions bind:advancedOptionsOpen bind:statsOpen {monitor} />
      {/each}
    </div>
  {/if}
</MediaQuery>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    z-index: 1;
  }
</style>
