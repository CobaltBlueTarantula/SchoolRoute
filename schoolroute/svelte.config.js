import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		appDir: 'app',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/SchoolRoute' : ''
		},
		prerender: {
    		handleHttpError: ({ status }) => {
      			if (status === 404) return;  // ignore base mismatch
      			return true;
    		}
  		}
	}
};

export default config;