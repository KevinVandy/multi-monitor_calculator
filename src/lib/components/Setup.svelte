<script lang="ts">
	import queryString from 'query-string';
	import {
		deskHeight,
		deskWidth,
		id,
		loadSetup,
		monitors,
		currentSetupId,
		name,
		scale,
		setups,
		description,
	} from '$lib/stores/SetupStore';
	import {
		expandAdvancedOptionsByDefault,
		expandStatsByDefault,
		preferredSearchEngine,
		theme,
		statUnits,
		inputUnits,
	} from '../stores/SettingsStore';
	import { afterUpdate, onMount } from 'svelte';
	import CircularProgress from '@smui/circular-progress';
	import CommandButtons from './CommandButtons.svelte';
	import Desk from './Desk.svelte';
	import MonitorOptionsArea from './MonitorOptionsArea.svelte';
	import { parseSetupFromUrl } from '$lib/utils/linkGenerator';
	import PrebuiltSetupsField from './fields/PrebuiltSetupsField.svelte';
	import type { ISettings, ISetup, ISetups } from '$lib/utils/interfaces';

	let loading = true;

	const loadCurrentSetup = (storedSetups: ISetups) => {
		let currentSetup: ISetup | null = $currentSetupId ? storedSetups[$currentSetupId] : null;
		if (!currentSetup && Object.keys(storedSetups).length > 0) {
			//sort setups by date and load most recent
			const sortedSetups: ISetup[] = Object.values(storedSetups).sort(
				(a: ISetup, b: ISetup) =>
					new Date(a.lastOpened!).getTime() - new Date(b.lastOpened!).getTime(),
			);
			currentSetup = sortedSetups[0];
		}
		if (currentSetup) {
			loadSetup(currentSetup);
		}
	};

	onMount(() => {
		//load settings from local storage
		const storedSettings: ISettings = JSON.parse(localStorage.getItem('settings') ?? '{}');
		if (storedSettings) {
			preferredSearchEngine.set(storedSettings.preferredSearchEngine ?? 'Google');
			expandAdvancedOptionsByDefault.set(storedSettings.expandAdvancedOptionsByDefault ?? false);
			expandStatsByDefault.set(storedSettings.expandStatsByDefault ?? true);
			statUnits.set(storedSettings.statUnits ?? 'Imperial');
			inputUnits.set(storedSettings.inputUnits ?? 'Imperial');
			theme.set(storedSettings.theme ?? 'dark');
		}

		//load most recent setup id from local storage
		const storedSetupId: string | null = localStorage.getItem('currentSetupId');
		if (storedSetupId) {
			currentSetupId.set(storedSetupId);
		}

		//load setups from local storage
		const storedSetups: ISetups = JSON.parse(localStorage.getItem('setups') ?? '{}');
		if (storedSetups) {
			setups.set(storedSetups);
		}

		//check for setup in URL
		const urlSetup = queryString.parse(location.search) as {
			[key: string]: string | number;
		};
		if (Object.keys(urlSetup).length > 0) {
			//parse a setup from url
			const parsedSetup = parseSetupFromUrl(urlSetup);

			//detect if setup exists in local storage and url, warn user if
			let confirmLoadFromUrl = false;
			const urlAlreadyExistsLocally =
				storedSetups && Object.keys(storedSetups).includes(parsedSetup.parsedId);
			if (urlAlreadyExistsLocally) {
				confirmLoadFromUrl = confirm(
					'You have already loaded this setup before. Do you want to overwrite from this link? Your recent changes could be lost if you made any.',
				);
			}

			if (!urlAlreadyExistsLocally || confirmLoadFromUrl) {
				//load setup from url
				id.set(parsedSetup.parsedId);
				deskHeight.set(parsedSetup.parsedDeskHeight);
				deskWidth.set(parsedSetup.parsedDeskWidth);
				monitors.set(parsedSetup.parsedMonitors);
				name.set(parsedSetup.parsedName);
				scale.set(parsedSetup.parsedScale);
			} else {
				//load setup from local storage
				loadSetup(storedSetups[parsedSetup.parsedId]);
			}

			//remove params from url so they don't get read again on page reload
			const newUrl = `${location.origin}${location.pathname}`;
			window.history.replaceState({ path: newUrl }, '', newUrl);
		} else if (storedSetups) {
			//load most recent setup from local storage
			loadCurrentSetup(storedSetups);
		}

		//make scale more mobile friendly
		if (window.matchMedia('(max-width: 480px)').matches) {
			scale.set(Math.min($scale, 10));
		}

		loading = false;
	});

	afterUpdate(() => {
		//cache settings
		localStorage.setItem(
			'settings',
			JSON.stringify({
				preferredSearchEngine: $preferredSearchEngine,
				expandAdvancedOptionsByDefault: $expandAdvancedOptionsByDefault,
				expandStatsByDefault: $expandStatsByDefault,
				statUnits: $statUnits,
				inputUnits: $inputUnits,
				theme: $theme,
			}),
		);

		//update current setup
		$setups[$id] = {
			description: $description,
			deskHeight: $deskHeight,
			deskWidth: $deskWidth,
			id: $id,
			lastOpened: new Date(),
			monitors: $monitors,
			name: $name,
			scale: $scale,
		};

		//cache setups
		localStorage.setItem('setups', JSON.stringify($setups));

		//store current setup id as most recent setp
		localStorage.setItem('currentSetupId', $id);
	});
</script>

<PrebuiltSetupsField />
<CommandButtons />
{#if loading}
	<div>
		<CircularProgress style="height: 64px; width: 64px;" indeterminate />
	</div>
{:else}
	<section>
		<Desk />
		<MonitorOptionsArea />
	</section>
{/if}

<style>
	div {
		width: 100vw;
		display: flex;
		justify-content: center;
		padding-top: 3rem;
	}
</style>
