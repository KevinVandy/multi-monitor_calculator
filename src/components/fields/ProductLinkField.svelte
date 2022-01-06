<script lang="ts">
  import TextField from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';
  import { urlRegex } from '../../utils/regex';

  export let monitor: IMonitor;

  $: invalid = monitor.productLink && !urlRegex.test(monitor.productLink);
</script>

<TextField
  bind:invalid
  bind:value={monitor.productLink}
  label="Product Link"
  input$name={`productLink${monitor.index}`}
  on:change={() => monitors.set($monitors)}
  style="width:100%;"
  type="url"
  validateOnValueChange
  variant="filled"
>
  <HelperText persistent slot="helper" style="margin-top:-1rem;">
    Save a link to where you can find this monitor.
  </HelperText>
</TextField>
