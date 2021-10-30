import type { IMonitor, ISetup, ISetups } from '../utils/interfaces';
import { writable } from 'svelte/store';
import defaultSetup from '../utils/defaultSetup.json';
import { v4 as uuid } from 'uuid';

export const getNewSetup = (): ISetup => ({
  ...JSON.parse(JSON.stringify(defaultSetup as ISetup)),
  id: uuid()
});

export const getNewMonitor = (index = 0): IMonitor => ({
  ...getNewSetup().monitors[0],
  index: index
});

export const parsedDefaultSetup = getNewSetup();

export const mostRecentSetupId = writable(null);
export const setups = writable<ISetups>({});
export const deskHeight = writable<number>(parsedDefaultSetup.deskHeight);
export const deskWidth = writable<number>(parsedDefaultSetup.deskWidth);
export const id = writable<string>(parsedDefaultSetup.id);
export const lastOpened = writable<Date>(parsedDefaultSetup.lastOpened);
export const monitors = writable<IMonitor[]>([getNewMonitor()]);
export const scale = writable<number>(parsedDefaultSetup.scale);
