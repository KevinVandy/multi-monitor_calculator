<script lang="ts">
  import Dialog, {
    Content as DialogContent,
    Actions as DialogActions,
    Title
  } from '@smui/dialog';
  import Button from '@smui/button';
  import TextField from '@smui/textfield';
  import { createNewSetup } from '../../stores/SetupStore';

  export let createSetupDialogOpen = false;
  export let drawerOpen = false;
  let newSetupName: string = 'Untitled Setup';

  const confirmCreateNewSetup = () => {
    createNewSetup(newSetupName);
    drawerOpen = !drawerOpen;
    createSetupDialogOpen = false;
  };
</script>

<Dialog bind:open={createSetupDialogOpen}>
  <Title style="text-align: left;">Create a new setup</Title>
  <DialogContent>
    <p>Your previously opened setup will be saved in the sidebar for later</p>
    <p>Give this new setup a unique name</p>
    <TextField
      label="Setup Name"
      bind:value={newSetupName}
      variant="filled"
      required
      style="width:100%;"
    />
  </DialogContent>
  <DialogActions>
    <Button on:click={() => (createSetupDialogOpen = false)}>Cancel</Button>
    <Button on:click={confirmCreateNewSetup}>Create Setup</Button>
  </DialogActions>
</Dialog>
