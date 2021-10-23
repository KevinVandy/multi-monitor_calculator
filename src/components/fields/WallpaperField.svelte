<script lang="ts">
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';

  export let monitor: IMonitor;

  $: invalid =
    monitor.previewMode === 'wallpaper' &&
    (!monitor.wallpaper ||
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
        monitor.wallpaper
      ));
</script>

<TextField
  bind:invalid
  bind:value={monitor.wallpaper}
  label="Wallpaper Link"
  on:change={() => {
    $monitors[monitor.index].previewMode = monitor.wallpaper
      ? 'wallpaper'
      : 'off';
    monitors.set($monitors);
  }}
  required={monitor.previewMode === 'wallpaper'}
  step="1"
  style="width:100%;"
  type="url"
  validateOnValueChange
  variant="filled"
/>
