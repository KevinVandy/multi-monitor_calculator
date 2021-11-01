<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    TopAppBarComponentDev,
    Title as TopAppBarTitle
  } from '@smui/top-app-bar';
  import Dialog, {
    Content as DialogContent,
    Actions as DialogActions,
    Title
  } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Button from '@smui/button';
  import A from '@smui/common/elements/A.svelte';
  import SetupsDrawer from '../components/SetupsDrawer.svelte';
  import { createNewSetup } from '../stores/SetupStore';
  import MediaQuery from '../utils/MediaQuery.svelte';
  import TextField from '@smui/textfield';

  let topAppBar: TopAppBarComponentDev;
  let drawerOpen: boolean = false;
  let createSetupDialogOpen: boolean = false;
  let newSetupName: string = 'Untitled Setup';

  const handleCreateSetup = () => {
    createSetupDialogOpen = true;
  };

  const confirmCreateNewSetup = () => {
    createNewSetup(newSetupName);
    drawerOpen = !drawerOpen;
    createSetupDialogOpen = false;
  };
</script>

<TopAppBar
  style="min-width:7rem;"
  bind:this={topAppBar}
  color="secondary"
  dense
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
      <MediaQuery query="(min-width: 480px)" let:matches>
        {#if matches}
          <TopAppBarTitle style="display:flex;align-content:center;">
            Manage Setups
          </TopAppBarTitle>
        {/if}
      </MediaQuery>
      <IconButton
        title="Create New Setup"
        class="material-icons"
        on:click={handleCreateSetup}
      >
        add
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

<Dialog bind:open={createSetupDialogOpen}>
  <Title style="text-align: left;">Create a new setup</Title>
  <DialogContent>
    <p>Your previously opened setup will be saved in the sidebar for later</p>
    <TextField
      label="Setup Name"
      bind:value={newSetupName}
      variant="filled"
      required
    />
  </DialogContent>
  <DialogActions>
    <Button on:click={() => (createSetupDialogOpen = false)}>Cancel</Button>
    <Button on:click={confirmCreateNewSetup}>Create Setup</Button>
  </DialogActions>
</Dialog>

<style>
  :global(.toolbar-link) {
    text-decoration: none;
    margin: 0 0.75rem;
  }
</style>
