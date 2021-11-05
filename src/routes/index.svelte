<script lang="ts">
  export const prerender = true;
  import Setup from '../components/Setup.svelte';
  import SetupSubmission from '../components/SetupSubmission.svelte';
</script>

<main>
  <Setup />
  <SetupSubmission />
</main>

<form
  name="setup-submission"
  data-netlify="true"
  netlify-honeypot="bot-field"
  hidden
>
  <input type="hidden" name="submissionLink" />
  <input type="text" name="setupName" />
  <input type="text" name="setupDescription" />
</form>
