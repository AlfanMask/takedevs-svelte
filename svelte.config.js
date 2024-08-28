import adapter from '@sveltejs/adapter-static';
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
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '',
			precompress: false,
			strict: true
		}),
		prerender: {
			// use relative URLs similar to an anchor tag <a href="/test/1"></a>
			// do not include group layout folders in the path such as /(group)/test/1
			entries: [
				'/', '/id', '/en',
				'/regis-affiliate',
				'/landing-page', '/online-shop', '/company-profile', '/custom-software',
				'/id/landing-page', '/id/online-shop', '/id/company-profile', '/id/custom-software',
				'/en/landing-page', '/en/online-shop', '/en/company-profile', '/en/custom-software',
			],
		}
	}
};

export default config;
