<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import SetupSubmissionDialog from './dialogs/SetupSubmissionDialog.svelte';
  import ShareLinkButton from './ShareLinkButton.svelte';

  let setupSubmissionDialogOpen = false;
</script>

<section>
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
  <Fab
    extended
    color="primary"
    variant="raised"
    on:click={() => (setupSubmissionDialogOpen = true)}
  >
    <Icon class="material-icons">send</Icon>Submit Setup
  </Fab>
</section>
<SetupSubmissionDialog bind:setupSubmissionDialogOpen />

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto;
    max-width: 720px;
    padding: 10rem 0.5rem;
  }
</style>
