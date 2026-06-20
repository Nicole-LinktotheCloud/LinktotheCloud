import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://linktothecloud.com',
  output: 'static',
  integrations: [react(), mdx(), sitemap()],
});
