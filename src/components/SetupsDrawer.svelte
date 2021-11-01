<script lang="ts">
  import Drawer, {
    Content,
    Header,
    Title as DrawerTitle,
    Scrim
  } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import Button from '@smui/button';
  import List, { Item, Text, Graphic, Separator } from '@smui/list';
  import Dialog, {
    Content as DialogContent,
    Actions as DialogActions,
    Title
  } from '@smui/dialog';
  import { id, loadSetup, setups } from '../stores/SetupStore';
  import type { ISetup } from '../utils/interfaces';

  export let drawerOpen: boolean = false;
  export let onCreateNewSetup: any;

  let confirmDeleteSetupDialogOpen = false;
  let setupToDelete: ISetup | null = null;

  const handleDeleteSetup = (setup: any) => {
    delete $setups[setup.id];
    setups.set($setups);
    loadSetup($setups[Object.keys($setups)[0]]);
  };
</script>

<Drawer variant="modal" fixed bind:open={drawerOpen}>
  <Header style="display: flex;align-items:flex-start;">
    <DrawerTitle>Manage Setups</DrawerTitle>
    <IconButton on:click={() => (drawerOpen = false)} class="material-icons">
      close
    </IconButton>
  </Header>
  <Content>
    <List>
      <Item on:click={() => onCreateNewSetup()}>
        <Graphic class="material-icons">add</Graphic>
        <Text>Create New Setup</Text>
      </Item>
      <Separator />
      {#each Object.values($setups) as setup}
        <Item
          activated={setup.id === $id}
          class="setup-item"
          on:click={() => {
            loadSetup(setup);
            drawerOpen = false;
          }}
        >
          <Graphic class="material-icons">monitor</Graphic>
          <div class="setup-name">
            <Text>{setup.name}</Text>
            <Text>{setup.monitors.length} monitors</Text>
          </div>
          <IconButton
            disabled={Object.keys($setups).length <= 1}
            on:click={(event) => {
              event.stopPropagation();
              setupToDelete = setup;
              confirmDeleteSetupDialogOpen = true;
            }}
            class="material-icons"
            title="Delete"
          >
            delete
          </IconButton>
        </Item>
      {/each}
    </List>
  </Content>
</Drawer>

<Scrim on:click={() => (drawerOpen = false)} fixed />

<Dialog bind:open={confirmDeleteSetupDialogOpen}>
  <Title style="text-align: left;">Are you sure?</Title>
  <DialogContent>
    <p>
      Are you sure you want to delete setup <i>{setupToDelete?.name ?? ''}</i> ?
    </p>
  </DialogContent>
  <DialogActions>
    <Button on:click={() => (confirmDeleteSetupDialogOpen = false)}>
      No, Cancel
    </Button>
    <Button
      on:click={() => {
        handleDeleteSetup(setupToDelete);
        confirmDeleteSetupDialogOpen = false;
      }}
    >
      Yes, Delete
    </Button>
  </DialogActions>
</Dialog>

<style>
  :global(.setup-item) {
    padding: 1rem 0.5rem !important;
  }

  .setup-name {
    width: 8rem;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
