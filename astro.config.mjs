// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pocket-barcelona.github.io',
  base: 'cpnl-practice-locations',
  integrations: [react()],
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});