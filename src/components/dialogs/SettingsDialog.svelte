<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button from '@smui/button';
  import PreferredSearchEngineField from '../fields/PreferredSearchEngineField.svelte';
  import ExpandedByDefaultFields from '../fields/ExpandedByDefaultFields.svelte';

  export let settingsDialogOpen = false;
</script>

<Dialog bind:open={settingsDialogOpen}>
  <Title>Settings</Title>
  <Content style="min-height:300px">
    <div class="settings-grid">
      <PreferredSearchEngineField />
      <ExpandedByDefaultFields />
      <span>
        <dark-mode-toggle
          appearance="switch"
          permanent
          dark="Dark"
          light="Light"
          legend="Theme Switcher"
        />
      </span>
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
    min-width: 300px;
  }
</style>
