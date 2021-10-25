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
  dark-mode-toggle {
    right: 1rem;
    top: 1rem;
    position: absolute;
  }
</style>
