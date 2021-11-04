<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import { afterUpdate } from 'svelte';
  import { encodeSetupToUrl } from '../utils/linkGenerator';
  import { monitors, scale, id } from '../stores/SetupStore';
  import ShareLinkButton from './ShareLinkButton.svelte';

  let submissionLink;

  afterUpdate(() => {
    //generate submission link
    submissionLink = `${location.origin}${location.pathname}?${encodeSetupToUrl(
      $monitors,
      $scale,
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
      body: new URLSearchParams(formData as URLSearchParams).toString()
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => console.error(error));
  };
</script>

<form
  data-netlify="true"
  method="POST"
  name="setup-submission"
  on:submit={handleSubmit}
>
  <h3>Want To Share Your Carefully Crafted Monitor Setup With Others?</h3>
  <p>
    You can generate and share a link with your friends and other devices. A
    sharable link will be copied to your clipboard.
  </p>
  <ShareLinkButton />
  <p>
    Or you can submit your monitor setup as a community submission, and it might
    get featured as a pre-buillt setup on this site for others to see.
  </p>
  <input type="hidden" name="submissionLink" value={submissionLink} />
  <Fab extended type="submit" color="primary" variant="raised">
    <Icon class="material-icons">send</Icon>Submit Setup
  </Fab>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto;
    max-width: 720px;
  }
</style>
