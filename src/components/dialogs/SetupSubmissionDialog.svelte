<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Snackbar, {
    Actions as SnackbarActions,
    Label,
    SnackbarComponentDev
  } from '@smui/snackbar';
  import Button from '@smui/button';
  import IconButton from '@smui/icon-button';
  import { afterUpdate } from 'svelte';
  import { encodeSetupToUrl } from '../../utils/linkGenerator';
  import {
    monitors,
    scale,
    id,
    deskHeight,
    deskWidth,
    name
  } from '../../stores/SetupStore';
  import SetupNameField from '../fields/SetupNameField.svelte';
  import SetupDescriptionField from '../fields/SetupDescriptionField.svelte';

  export let setupSubmissionDialogOpen = false;

  let submissionReceivedSnackbar: SnackbarComponentDev;
  let submissionLink: string = '';

  afterUpdate(() => {
    //generate submission link
    submissionLink = `${location.origin}${location.pathname}?${encodeSetupToUrl(
      $monitors,
      $scale,
      $deskHeight,
      $deskWidth,
      $name,
      $id
    )}`;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById('setup-submission') as HTMLFormElement;
    let formData = new FormData(myForm);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as {}).toString()
    })
      .then(() => {
        submissionReceivedSnackbar.open();
        setTimeout(() => submissionReceivedSnackbar.close(), 15000);
      })
      .catch((error) => console.error(error));
  };
</script>

<form
  data-netlify="true"
  id="setup-submission"
  name="setup-submission"
  netlify-honeypot="bot-field"
  on:submit={handleSubmit}
>
  <Dialog bind:open={setupSubmissionDialogOpen}>
    <Title>Submit Your Setup</Title>
    <Content>
      <input type="hidden" name="form-name" value="setup-submission" />
      <input type="hidden" name="submissionLink" value={submissionLink} />
      <div>
        <SetupNameField />
        <SetupDescriptionField />
      </div>
    </Content>
    <Actions>
      <Button
        type="button"
        on:click={() => (setupSubmissionDialogOpen = false)}
      >
        Cancel
      </Button>
      <Button type="submit" on:click={handleSubmit}>Submit Setup</Button>
    </Actions>
  </Dialog>
</form>

<Snackbar bind:this={submissionReceivedSnackbar}>
  <Label>Your Monitor Setup Submission Was Received</Label>
  <SnackbarActions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </SnackbarActions>
</Snackbar>

<style>
  div {
    display: grid;
    min-width: 300px;
    gap: 1rem;
  }
</style>
