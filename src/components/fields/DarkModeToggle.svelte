<script lang="ts">
  import { theme } from '../../stores/SettingsStore';
  export let appearance = 'toggle';
</script>

<dark-mode-toggle
  dark="Dark"
  light="Light"
  mode={$theme ?? 'dark'}
  on:colorschemechange={(event) => theme.set(event.detail.colorScheme)}
  {appearance}
/>
