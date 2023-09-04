import type { IMonitor, ISetup, ISetups } from '../utils/interfaces';
import { writable } from 'svelte/store';
import defaultSetup from '../utils/defaultSetup';
import { v4 as uuid } from 'uuid';

export const getNewSetup = (name?: string, index?: number): ISetup => ({
	...JSON.parse(JSON.stringify(defaultSetup)),
	id: uuid(),
	name: name ?? `Untitled Setup ${index ?? 1}`.trim(),
});

export const getNewMonitor = (index = 0, diagonal = 27): IMonitor => ({
	...getNewSetup().monitors[0],
	diagonal: diagonal,
	index: index,
});

export const parsedDefaultSetup = getNewSetup();

export const currentSetupId = writable<string | null>(null);
export const setups = writable<ISetups>({});
export const description = writable<string>(parsedDefaultSetup.description);
export const deskHeight = writable<number>(parsedDefaultSetup.deskHeight);
export const deskWidth = writable<number>(parsedDefaultSetup.deskWidth);
export const id = writable<string>(parsedDefaultSetup.id!);
export const lastOpened = writable<Date>(parsedDefaultSetup.lastOpened!);
export const monitors = writable<IMonitor[]>([getNewMonitor()]);
export const name = writable<string>(parsedDefaultSetup.name);
export const scale = writable<number>(parsedDefaultSetup.scale);

export const loadSetup = (setup: ISetup): void => {
	deskHeight.set(setup.deskHeight);
	deskWidth.set(setup.deskWidth);
	description.set(setup.description);
	id.set(setup.id!);
	lastOpened.set(setup.lastOpened!);
	monitors.set(setup.monitors);
	name.set(setup.name);
	scale.set(setup.scale);
};

export const createNewSetup = (name: string, index?: number): void => {
	const newSetup = getNewSetup(name, index);
	setups.update((setups) => ({ ...setups, [newSetup.id!]: newSetup }));
	loadSetup(newSetup);
};
