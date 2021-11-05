import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    target: '#svelte',
    prerender: {
      crawl: true,
      enabled: true,
      onError: "continue",
      entries: ['*'],
    },
  }
};

export default config;
