<script lang="ts">
  import Setup from '../components/Setup.svelte';
</script>

<main>
  <Setup />
</main>

<form name="setup-submission" netlify netlify-honeypot="bot-field" hidden>
  <input type="hidden" name="submissionLink" />
  <input type="text" name="setupName" />
  <input type="text" name="setupDescription" />
</form>
