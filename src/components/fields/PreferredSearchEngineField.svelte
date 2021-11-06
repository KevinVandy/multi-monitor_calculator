<script lang="ts">
  import Select, { Option } from '@smui/select';
  import { searchOptions } from '../../utils/searchEngine';
  import { preferredSearchEngine } from '../../stores/SettingsStore';
</script>

<Select
  bind:value={$preferredSearchEngine}
  label="Preferred Search Engine"
  input$name="preferredSearchEngine"
  variant="filled"
>
  {#each [...Object.values(searchOptions.searchEngine), ...Object.values(searchOptions.store)] as searchEngine}
    <Option value={searchEngine.name}>
      <picture>
        <source srcSet={searchEngine.logoWebp} type="image/webp" />
        <source srcSet={searchEngine.logoPng} type="image/png" />
        <img
          alt="{searchEngine.name} logo"
          src={searchEngine.logoPng}
          loading="lazy"
        />
      </picture>
      {searchEngine.name}
    </Option>
  {/each}
</Select>

<style>
  img {
    width: 1.5rem;
    padding-right: 1rem;
  }
</style>
