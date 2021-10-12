import type { IMonitor } from 'src/utils/interfaces';
import { writable } from 'svelte/store';
import defaultMonitor from '../utils/defaultMonitor.json';

export const getNewMonitor = (index = 0): IMonitor => ({
  ...JSON.parse(JSON.stringify(defaultMonitor as IMonitor)),
  index: index
});

export const scale = writable(16);
export const deskWidth = writable(6);
export const monitors = writable([getNewMonitor()]);
