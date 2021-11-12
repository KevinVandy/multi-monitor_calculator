<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button from '@smui/button';
  import PreferredSearchEngineField from '../fields/PreferredSearchEngineField.svelte';
  import ExpandedByDefaultFields from '../fields/ExpandedByDefaultFields.svelte';
  import UnitsField from '../fields/UnitsField.svelte';
  import DarkModeToggle from '../fields/DarkModeToggle.svelte';

  export let settingsDialogOpen = false;
</script>

<Dialog bind:open={settingsDialogOpen}>
  <Title>Settings</Title>
  <Content style="min-height:350px">
    <div class="settings-grid">
      <PreferredSearchEngineField />
      <ExpandedByDefaultFields />
      <UnitsField />
      <DarkModeToggle appearance="switch" />
    </div>
  </Content>
  <Actions>
    <Button on:click={() => (settingsDialogOpen = false)}>Close</Button>
  </Actions>
</Dialog>

<style>
  .settings-grid {
    display: grid;
    gap: 2rem;
    overflow: visible;
    width: 300px;
  }
</style>
