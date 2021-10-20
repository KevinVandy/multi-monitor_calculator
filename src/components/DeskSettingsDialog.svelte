<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button from '@smui/button';
  import DeskWidthField from './fields/DeskWidthField.svelte';
  import ScaleField from './fields/ScaleField.svelte';
import DeskHeightField from './fields/DeskHeightField.svelte';

  export let settingsDialogOpen = false;
</script>

<Dialog bind:open={settingsDialogOpen}>
  <Title>Settings</Title>
  <Content>
    <div class="content-grid">
      <ScaleField />
      <DeskWidthField />
      <DeskHeightField />
    </div>
  </Content>
  <Actions>
    <Button on:click={() => (settingsDialogOpen = false)}>Close</Button>
  </Actions>
</Dialog>

<style>
  div {
    display: grid;
    gap: 1rem;
    min-width: 320px;
  }
</style>
