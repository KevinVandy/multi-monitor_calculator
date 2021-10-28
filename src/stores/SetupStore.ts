import type { IMonitor, ISetup, SearchEngine } from 'src/utils/interfaces';
import { writable } from 'svelte/store';
import defaultSetup from '../utils/defaultSetup.json';

export const getNewSetup = (): ISetup => ({
  ...JSON.parse(JSON.stringify(defaultSetup as ISetup))
});

export const getNewMonitor = (index = 0): IMonitor => ({
  ...getNewSetup().monitors[0],
  index: index
});

export const parsedDefaultSetup = getNewSetup();

export const scale = writable<number>(parsedDefaultSetup.scale);
export const deskWidth = writable<number>(parsedDefaultSetup.deskWidth);
export const deskHeight = writable<number>(parsedDefaultSetup.deskHeight);
export const monitors = writable<IMonitor[]>([getNewMonitor()]);
export const preferredSearchEngine = writable<SearchEngine>(
  parsedDefaultSetup.preferredSearchEngine
);
