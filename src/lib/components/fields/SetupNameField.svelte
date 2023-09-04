<script lang="ts">
	import TextField from '@smui/textfield';
	import { name } from '$lib/stores/SetupStore';
</script>

<TextField bind:value={$name} label="Setup Name" input$name="setupName" variant="filled" />
