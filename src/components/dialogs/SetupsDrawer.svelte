<script lang="ts">
  import Drawer, {
    Content,
    Header,
    Title as DrawerTitle,
    Scrim
  } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import List, { Item, Text, Graphic, Separator } from '@smui/list';
  import { id, loadSetup, setups } from '../../stores/SetupStore';
  import type { ISetup } from '../../utils/interfaces';
  import ConfirmDeleteSetupDialog from './ConfirmDeleteSetupDialog.svelte';

  export let drawerOpen: boolean = false;
  export let onCreateNewSetup: any;

  let confirmDeleteSetupDialogOpen = false;
  let setupToDelete: ISetup | null = null;
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

<ConfirmDeleteSetupDialog
  bind:confirmDeleteSetupDialogOpen
  bind:setupToDelete
/>

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
