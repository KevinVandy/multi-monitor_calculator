<script lang="ts">
  import Setup from '../components/Setup.svelte';
</script>

<h1>Multi-Monitor Calculator</h1>
<h2>A Tool For Planning Your Multi-Monitor Setup!</h2>
<dark-mode-toggle appearance="toggle" dark="Dark" light="Light" permanent />

<main>
  <Setup />
</main>

<style>
  :global(.dark-mode-toggle) {
    text-align: center;
  }
  dark-mode-toggle {
    right: 1rem;
    top: 1rem;
    position: absolute;
  }
</style>
