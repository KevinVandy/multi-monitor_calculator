import type { IMonitor, ISetup } from 'src/utils/interfaces';
import { writable } from 'svelte/store';
import defaultSetup from '../utils/defaultSetup.json';

export const getNewMonitor = (index = 0): IMonitor => ({
  ...JSON.parse(JSON.stringify(defaultSetup as ISetup)).monitors[0],
  index: index
});

export const scale = writable<number>(16);
export const deskWidth = writable<number>(6);
export const deskHeight = writable<number>(3);
export const monitors = writable<IMonitor[]>([getNewMonitor()]);
