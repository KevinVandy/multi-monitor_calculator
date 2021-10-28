<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    TopAppBarComponentDev,
    Title as TopAppBarTitle
  } from '@smui/top-app-bar';
  import Drawer, {
    AppContent,
    Title as DrawerTitle,
    Scrim
  } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import A from '@smui/common/elements/A.svelte';

  let topAppBar: TopAppBarComponentDev;
  let drawerOpen = false;
</script>

<TopAppBar bind:this={topAppBar} color="secondary" dense variant="short">
  <Row>
    <Section align="start">
      <IconButton
        class="material-icons"
        on:click={() => (drawerOpen = !drawerOpen)}
      >
        menu
      </IconButton>
      <TopAppBarTitle style="display:flex;align-content:center;">
        Setups
      </TopAppBarTitle>
    </Section>
    <Section align="end" toolbar>
      <TopAppBarTitle style="dispay:flex;">
        <A style="color:white;" class="toolbar-link" href="/">Home</A>
        <A style="color:white;" class="toolbar-link" href="/about">About</A>
      </TopAppBarTitle>
    </Section>
  </Row>
</TopAppBar>

<Drawer variant="modal" fixed bind:open={drawerOpen}>
  <div style="display: flex;">
    <DrawerTitle>Your Saved Setups</DrawerTitle>
    <IconButton on:click={() => (drawerOpen = false)} class="material-icons">
      close
    </IconButton>
  </div>
</Drawer>

<Scrim on:click={() => (drawerOpen = false)} fixed />

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

  :global(.toolbar-link) {
    text-decoration: none;
    margin: 0 0.75rem;
  }

  @media(max-width: 600px) {
    header {
      padding-top: 5rem;
    }
  }
</style>
