<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    TopAppBarComponentDev,
    Title as TopAppBarTitle
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import A from '@smui/common/elements/A.svelte';
  import SetupsDrawer from './dialogs/SetupsDrawer.svelte';
  import CreateSetupDialog from './dialogs/CreateSetupDialog.svelte';
  import SettingsDialog from './dialogs/SettingsDialog.svelte';

  let topAppBar: TopAppBarComponentDev;
  let drawerOpen: boolean = false;
  let createSetupDialogOpen: boolean = false;
  let settingsDialogOpen: boolean = false;

  const handleCreateSetup = () => {
    createSetupDialogOpen = true;
  };
</script>

<TopAppBar
  bind:this={topAppBar}
  color="secondary"
  dense
  style="min-width:9.5rem;"
  variant="short"
>
  <Row>
    <Section align="start">
      <IconButton
        title="Manage Setups"
        class="material-icons"
        on:click={() => (drawerOpen = true)}
      >
        menu
      </IconButton>
      <IconButton
        title="Create New Setup"
        class="material-icons"
        on:click={handleCreateSetup}
      >
        add
      </IconButton>
      <IconButton
        title="Settings"
        class="material-icons"
        on:click={() => (settingsDialogOpen = true)}
      >
        settings
      </IconButton>
    </Section>
    <Section align="end" toolbar>
      <TopAppBarTitle style="dispay:flex;">
        <A style="color:white;" class="toolbar-link" href="/">Home</A>
        <A style="color:white;" class="toolbar-link" href="/about">About</A>
      </TopAppBarTitle>
    </Section>
  </Row>
</TopAppBar>
<SetupsDrawer bind:drawerOpen onCreateNewSetup={handleCreateSetup} />
<CreateSetupDialog bind:createSetupDialogOpen bind:drawerOpen />
<SettingsDialog bind:settingsDialogOpen />

<style>
  :global(.toolbar-link) {
    text-decoration: none;
    margin: 0 0.75rem;
  }
</style>
