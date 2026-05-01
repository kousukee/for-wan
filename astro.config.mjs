import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://for-wan.netlify.app',
  integrations: [sitemap()],
});
