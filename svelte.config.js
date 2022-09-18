import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: preprocess(),
	compilerOptions: {
		sourcemap: false
	},
	kit: {
		adapter: adapter({ out: "build" })
	}
};

export default config;
