<script lang="ts">
  import { AppContent } from '@smui/drawer';
  import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />

<AppContent class="app-content">
  <header>
    <h1>Multi-Monitor Calculator</h1>
    <h2>A Tool For Planning Your Multi-Monitor Setup!</h2>
  </header>
  <dark-mode-toggle appearance="toggle" permanent dark="Dark" light="Light" />
  <slot />
</AppContent>

<style>
  header {
    padding-top: 3rem;
  }
  dark-mode-toggle {
    right: 0.5rem;
    top: 3.5rem;
    position: absolute;
  }

  :global(.app-content) {
    min-height: 120vh;
  }

  @media (max-width: 600px) {
    header {
      padding-top: 5rem;
    }
  }
</style>
