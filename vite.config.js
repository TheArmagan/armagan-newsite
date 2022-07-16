import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  kit: {
    ssr: {
      external: ['@xstate/svelte']
    }
  }
};

export default config;