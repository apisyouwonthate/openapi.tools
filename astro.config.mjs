import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    react({
      experimentalReactChildren: true,
    }),
  ],
  // @see hosting with netlify https://docs.astro.build/en/guides/integrations-guide/netlify/
  output: 'static',
  adapter: netlify(),
  site: 'https://openapi.tools',
  trailingSlash: 'never',
});
