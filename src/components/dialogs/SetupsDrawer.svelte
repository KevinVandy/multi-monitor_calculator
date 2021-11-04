<script lang="ts">
  import Drawer, {
    Content,
    Header,
    Title as DrawerTitle,
    Scrim
  } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import List, { Item, Text, Graphic, Separator } from '@smui/list';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import type { ISetup } from 'src/utils/interfaces';
  import { id, loadSetup, setups } from '../../stores/SetupStore';
  import ConfirmDeleteSetupDialog from './ConfirmDeleteSetupDialog.svelte';
  import SetupEditDialog from './SetupEditDialog.svelte';

  export let drawerOpen: boolean = false;
  export let onCreateNewSetup: any;
  let setupToDelete: ISetup | null = null;
  let confirmDeleteSetupDialogOpen: boolean = false;
  let setupEditDialogOpen = false;
</script>

<Drawer style="width:300px;" variant="modal" fixed bind:open={drawerOpen}>
  <Header style="display: flex;align-items:flex-start;">
    <DrawerTitle style="text-align:left;margin:0;">Manage Setups</DrawerTitle>
    <IconButton
      style="position:absolute;top:4px;right:4px;"
      on:click={() => (drawerOpen = false)}
      class="material-icons"
    >
      close
    </IconButton>
  </Header>
  <Content>
    <List>
      <Item on:click={() => (setupEditDialogOpen = true)}>
        <Graphic class="material-icons">edit</Graphic>
        <Text>Edit Current Setup</Text>
      </Item>
      <Item on:click={onCreateNewSetup}>
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
            <Text>
              {setup.name}
            </Text>
            <Text>{setup.monitors.length} monitors</Text>
            <Text>{new Date(setup?.lastOpened)?.toDateString()}</Text>
          </div>
          <Wrapper>
            <IconButton
              disabled={Object.keys($setups).length <= 1}
              on:click={(event) => {
                event.stopPropagation();
                setupToDelete = setup;
                confirmDeleteSetupDialogOpen = true;
              }}
              class="material-icons"
            >
              delete
            </IconButton>
            <Tooltip>Delete this setup</Tooltip>
          </Wrapper>
        </Item>
      {/each}
    </List>
  </Content>
</Drawer>

<Scrim on:click={() => (drawerOpen = false)} fixed />

<ConfirmDeleteSetupDialog
  bind:confirmDeleteSetupDialogOpen
  bind:setup={setupToDelete}
/>

<SetupEditDialog bind:setupEditDialogOpen />

<style>
  :global(.setup-item) {
    padding: 1rem 0.5rem !important;
  }

  .setup-name {
    width: 10rem;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
