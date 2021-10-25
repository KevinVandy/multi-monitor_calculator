<script lang="ts">
  import Setup from '../components/Setup.svelte';
</script>

<header>
  <h1>Multi-Monitor Calculator</h1>
  <h2>A Tool For Planning Your Multi-Monitor Setup!</h2>
</header>

<dark-mode-toggle appearance="toggle" dark="Dark" light="Light" permanent />

<main>
  <Setup />
</main>

<style>
  header {
    padding-top: 1rem;
  }
  dark-mode-toggle {
    right: 0.5rem;
    top: 0.5rem;
    position: absolute;
  }
</style>
