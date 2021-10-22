<script lang="ts">
  import Setup from '../components/Setup.svelte';
</script>

<dark-mode-toggle appearance="toggle" dark="Dark" light="Light" permanent />
<h1>Mulit-Montitor Calculator</h1>
<h2>A Tool For Planning Your Mulit-Montitor Setup!</h2>

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
