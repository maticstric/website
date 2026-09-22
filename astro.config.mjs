// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://maticstric.github.io',
  base: '/website', // must match your repo name exactly, case-sensitive
  vite: {
    plugins: [tailwindcss()]
  }
});