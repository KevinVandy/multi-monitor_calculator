<script lang="ts">
  import A from '@smui/common/elements/A.svelte';
  import Paper, {Content} from '@smui/paper';
</script>

<Paper class="about">
  <Content>
    A Kevin Vandy Tool - <A
      target="_blank"
      rel="no opener"
      href="https://www.kevinvancott.com"
      >kevinvancott.com
    </A>
  </Content>
  <Content>
    View the Source Code on <A
      target="_blank"
      rel="no opener"
      href="https://github.com/KevinVandy/multi-monitor_calculator">Github</A
    >
  </Content>
  <Content>
    If you find a bug or want to submit a feature request, feel free to submit
    an issue on the github <A
      target="_blank"
      rel="no opener"
      href="https://github.com/KevinVandy/multi-monitor_calculator/issues"
      >issues</A
    > tab
  </Content>
  <Content>
    Made with <A target="_blank" rel="no opener" href="https://kit.svelte.dev/"
      >SvelteKit</A
    > and <A
      target="_blank"
      rel="no opener"
      href="https://sveltematerialui.com/">Svelte Material UI (SMUI)</A
    >
  </Content>
</Paper>

<style>
  :global(.about) {
    display: grid;
    gap: 1rem;
    margin: 2rem auto;
    max-width: 90ch;
    padding: 1.5rem;
  }
</style>
