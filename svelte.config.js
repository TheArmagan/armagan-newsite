import adapter from '@sveltejs/adapter-node';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: preprocess(),
	compilerOptions: {
		sourcemap: false
	},
	kit: {
		adapter: adapter({ out: "build" }),
		browser: {
			hydrate: true,
			router: true
		},
		vite: {
			ssr: {
				external: ['@xstate/svelte']
			}
		}
	}
};

export default config;
