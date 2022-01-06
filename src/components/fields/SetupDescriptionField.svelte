<script lang="ts">
  import TextField from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import { description } from '../../stores/SetupStore';
</script>

<TextField
  bind:value={$description}
  label="Setup Description"
  input$name="setupDescription"
  required
  textarea
  style="width:100%;max-height:200px;"
  variant="filled"
/>
<HelperText persistent slot="helper" style="margin-top:-1rem;">
  What makes this setup unique?
</HelperText>
