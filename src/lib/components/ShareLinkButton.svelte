<script lang="ts">
	import Fab, { Icon } from '@smui/fab';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import IconButton from '@smui/icon-button';
	import Snackbar, { Actions as SnackbarActions, Label } from '@smui/snackbar';
	import { monitors, scale, id, deskHeight, deskWidth, name } from '$lib/stores/SetupStore';
	import { encodeSetupToUrl } from '$lib/utils/linkGenerator';

	let copiedToClipboardSnackbar: Snackbar;

	const handleGenerateLink = () => {
		const newSearchString = encodeSetupToUrl(
			$monitors,
			$scale,
			$deskHeight,
			$deskWidth,
			$name,
			$id,
		);
		const newUrl = `${location.origin}${location.pathname}?${newSearchString}`;
		window.history.replaceState({ path: newUrl }, '', newUrl);
		navigator.clipboard.writeText(location.href);
		copiedToClipboardSnackbar.open();
		setTimeout(() => copiedToClipboardSnackbar.close(), 15000);
	};
</script>

<Wrapper>
	<Fab class="fab-button" color="primary" extended on:click={handleGenerateLink}>
		<Icon class="material-icons">share</Icon>Share Link
	</Fab>
	<Tooltip>
		Generate a link to this setup that you can use to send to your friends or other devices
	</Tooltip>
</Wrapper>

<Snackbar bind:this={copiedToClipboardSnackbar}>
	<Label>URL Copied to Clipboard!</Label>
	<SnackbarActions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</SnackbarActions>
</Snackbar>
