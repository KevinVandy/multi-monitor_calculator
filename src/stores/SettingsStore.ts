import type { SearchEngine } from '../utils/interfaces';
import { writable } from 'svelte/store';

export const preferredSearchEngine = writable<SearchEngine>('google');
