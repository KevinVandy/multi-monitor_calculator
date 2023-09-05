import AmazonPng from '../images/amazon.png';
import BestBuyPng from '../images/bestbuy.png';
import BingPng from '../images/bing.png';
import DuckDuckGoPng from '../images/duckduckgo.png';
import GooglePng from '../images/google.png';
import NeweggPng from '../images/newegg.png';
import AmazonWebp from '../images/amazon.webp';
import BestBuyWebp from '../images/bestbuy.webp';
import BingWebp from '../images/bing.webp';
import DuckDuckGoWebp from '../images/duckduckgo.webp';
import GoogleWebp from '../images/google.webp';
import NeweggWebp from '../images/newegg.webp';
import type { IMonitor } from './interfaces';

export const searchOptions = {
	searchEngine: [
		{
			name: 'Google',
			logoPng: GooglePng,
			logoWebp: GoogleWebp,
		},
		{
			name: 'Bing',
			logoPng: BingPng,
			logoWebp: BingWebp,
		},
		{
			name: 'DuckDuckGo',
			logoPng: DuckDuckGoPng,
			logoWebp: DuckDuckGoWebp,
		},
	],
	store: [
		{
			name: 'Amazon',
			logoPng: AmazonPng,
			logoWebp: AmazonWebp,
		},
		{
			name: 'Best Buy',
			logoPng: BestBuyPng,
			logoWebp: BestBuyWebp,
		},
		{
			name: 'Newegg',
			logoPng: NeweggPng,
			logoWebp: NeweggWebp,
		},
	],
};

export const performSearch = (searchEngine: string, monitor: IMonitor) => {
	let searchUrl = '';

	//url based on search engine chosen
	if (searchEngine === 'Bing') searchUrl = 'https://www.bing.com/search?q=';
	else if (searchEngine === 'DuckDuckGo') searchUrl = 'https://www.duckduckgo.com/?q=';
	else if (searchEngine === 'Amazon') searchUrl = 'https://www.amazon.com/s?k=';
	else if (searchEngine === 'Newegg') searchUrl = 'https://www.newegg.com/p/pl?d=';
	else if (searchEngine === 'Best Buy')
		searchUrl = 'https://www.bestbuy.com/site/searchpage.jsp?st=';
	else searchUrl = 'https://www.google.com/search?q=';

	//base search string
	searchUrl += 'monitor';

	//other search params
	if (monitor.diagonal) searchUrl += '+' + encodeURIComponent(`${monitor.diagonal}"`);
	if (monitor.aspectRatio !== 'Custom') searchUrl += '+' + encodeURIComponent(monitor.aspectRatio);
	if (monitor.resolution.standard !== 'Custom')
		searchUrl += '+' + encodeURIComponent(monitor.resolution.standard);
	if (monitor.resolution.horizontal && monitor.resolution.vertical)
		searchUrl +=
			'+' + encodeURIComponent(`${monitor.resolution.horizontal}x${monitor.resolution.vertical}`);
	if (monitor.refreshRate !== 60) searchUrl += '+' + encodeURIComponent(`${monitor.refreshRate}HZ`);
	if (monitor.responseTime) searchUrl += '+' + encodeURIComponent(`${monitor.responseTime}ms`);
	if (monitor.displayType !== 'any') searchUrl += '+' + encodeURIComponent(monitor.displayType);
	if (monitor.syncType !== 'any' && monitor.displayType !== 'none')
		searchUrl += '+' + encodeURIComponent(monitor.syncType);
	if (monitor.features.curved) searchUrl += '+' + encodeURIComponent('curved');
	if (monitor.features.hdr) searchUrl += '+' + encodeURIComponent('HDR');

	//open search in new tab
	window.open(searchUrl, '_blank', 'noopener');
};
