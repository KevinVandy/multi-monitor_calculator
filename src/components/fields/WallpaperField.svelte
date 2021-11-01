<script lang="ts">
  import TextField from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text/index';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  import { urlRegex } from '../../utils/regex';

  export let monitor: IMonitor;

  $: invalid = monitor.wallpaper && !urlRegex.test(monitor.wallpaper);
</script>

<TextField
  bind:invalid
  bind:value={monitor.wallpaper}
  label="Wallpaper Link"
  on:change={() => {
    $monitors[monitor.index].previewMode = urlRegex.test(monitor.wallpaper)
      ? 'wallpaper'
      : null;
    monitors.set($monitors);
  }}
  required={monitor.previewMode === 'wallpaper'}
  style="width:100%;"
  type="url"
  validateOnValueChange
  variant="filled"
>
  <HelperText persistent slot="helper" style="margin-top:-1rem;">
    See how your favorite wallpapers look on this setup!
  </HelperText>
</TextField>
