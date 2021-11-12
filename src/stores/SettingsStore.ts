import { writable } from 'svelte/store';

export const preferredSearchEngine = writable<string>('Google');
export const expandAdvancedOptionsByDefault = writable<boolean>(false);
export const expandStatsByDefault = writable<boolean>(true);
export const units = writable<'Metric' | 'Imperial'>('Imperial');
export const theme = writable<'dark' | 'light'>('dark');