<script lang="ts">
  import Dialog, {
    Content as DialogContent,
    Actions as DialogActions,
    Title
  } from '@smui/dialog';
  import Button from '@smui/button';
  import TextField from '@smui/textfield';
  import { createNewSetup, setups } from '../../stores/SetupStore';
  import { afterUpdate } from 'svelte';

  export let createSetupDialogOpen = false;
  export let drawerOpen = false;
  let newSetupName = 'Untitled Setup';
  let newDescription = ``;

  afterUpdate(() => {
    if (newSetupName.includes('Untitled Setup')) {
      newSetupName = `Untitled Setup ${Object.keys($setups).length + 1}`;
    }
  });

  const confirmCreateNewSetup = () => {
    createNewSetup(newSetupName, Object.keys($setups).length + 1);
    drawerOpen = !drawerOpen;
    createSetupDialogOpen = false;
    newSetupName = `Untitled Setup ${Object.keys($setups).length + 1}`;
    newDescription = '';
  };
</script>

<Dialog bind:open={createSetupDialogOpen}>
  <Title style="text-align: left;">Create a new setup</Title>
  <DialogContent>
    <p>Your previously opened setup will be saved in the sidebar for later</p>
    <p>Give this new setup a unique name</p>
    <div>
      <TextField
        bind:value={newSetupName}
        label="Setup Name"
        input$name="newSetupName"
        required
        style="width:100%;"
        variant="filled"
      />
      <TextField
        bind:value={newDescription}
        label="Setup Description (optional)"
        input$name="newSetupDescription"
        textarea
        style="width:100%;max-height:200px;"
        variant="filled"
      />
    </div>
  </DialogContent>
  <DialogActions>
    <Button on:click={() => (createSetupDialogOpen = false)}>Cancel</Button>
    <Button on:click={confirmCreateNewSetup}>Create Setup</Button>
  </DialogActions>
</Dialog>

<style>
  div {
    display: grid;
    min-width: 300px;
    gap: 1rem;
  }
</style>
