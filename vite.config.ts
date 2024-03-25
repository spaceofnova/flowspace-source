import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
/** @type {import('vite').UserConfig} */

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
		  strategies: 'injectManifest',
		  srcDir: 'src',
		  filename: 'service-worker.js', // or `my-sw.ts`
		  /* other pwa options */  
		})
	  ],
	
});
