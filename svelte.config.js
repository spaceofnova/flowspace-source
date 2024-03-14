import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		csp: {
            mode: 'hash', // 'hash' for production
            directives: {
                'default-src': ['self'],
                'script-src': ['self', 'va.vercel-scripts.com'],
                'style-src': ['self', 'fonts.googleapis.com'],
                'connect-src': ['self', 'https://heroic-pipefish-74.clerk.accounts.dev', '*.flowspace.app'],
				"img-src": ["self", "data:", "img.clerk.com", 'files-novaspace.replit.app'],
				'worker-src': ['self', 'blob:'],
				"frame-src": ["self", "https://heroic-pipefish-74.clerk.accounts.dev", 'https://gsctbirdnthlooylyrsakgtnquyrydsz.replit.app/'],
            }
        }
	}
};

export default config;
