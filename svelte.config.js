import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		files: {
			serviceWorker: 'static/service-worker.js' // or `src/my-sw.ts`
		},
		adapter: adapter()
	}
};

export default config;
