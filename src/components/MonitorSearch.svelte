<script lang="ts">
  import Button, { Label, Icon, Group, GroupItem } from '@smui/button';
  import Menu, { MenuComponentDev } from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';
  import HelperText from '@smui/textfield/helper-text/index';
  import type { IMonitor } from '../utils/interfaces';
  import { preferredSearchEngine } from '../stores/SettingsStore';
  import { performSearch, searchOptions } from '../utils/searchEngine';
  import Image from '../utils/Image.svelte';

  export let monitor: IMonitor;

  let menu: MenuComponentDev;
</script>

<div class="container">
  <Group variant="raised">
    <Button
      on:click={() => performSearch($preferredSearchEngine, monitor)}
      variant="raised"
    >
      <Icon class="material-icons">search</Icon>
      <Label>Search This Monitor</Label>
    </Button>
    <div use:GroupItem>
      <Button
        aria-label="Search With Other Search Engine"
        on:click={() => menu.setOpen(true)}
        variant="raised"
        style="padding: 0; min-width: 36px;"
      >
        <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
      </Button>
      <Menu bind:this={menu} anchorCorner="TOP_LEFT">
        <List>
          {#each Object.values(searchOptions.searchEngine) as searchEngine}
            <Item
              on:SMUI:action={() => performSearch(searchEngine.name, monitor)}
            >
              <Image
                alt="{searchEngine.name} logo"
                class="se-img"
                lazy
                srcPng={searchEngine.logoPng}
                srcWebp={searchEngine.logoWebp}
              />
              <Text>Search {searchEngine.name}</Text>
            </Item>
          {/each}
          <Separator />
          {#each Object.values(searchOptions.store) as searchEngine}
            <Item
              on:SMUI:action={() => performSearch(searchEngine.name, monitor)}
            >
              <Image
                alt="{searchEngine.name} logo"
                class="se-img"
                lazy
                srcPng={searchEngine.logoPng}
                srcWebp={searchEngine.logoWebp}
              />
              <Text>Search {searchEngine.name}</Text>
            </Item>
          {/each}
        </List>
      </Menu>
    </div>
  </Group>
  <HelperText persistent style="margin-top: 0.25rem;">
    (Search where to buy a monitor like this)
  </HelperText>
</div>

<style>
  .container {
    margin: 2rem auto;
    display: grid;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  :global(.se-img) {
    padding-right: 1rem;
    width: 1.5rem;
  }
</style>
