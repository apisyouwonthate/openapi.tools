import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ...
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
  // @see hosting with vercel https://docs.astro.build/en/guides/integrations-guide/vercel/
  output: 'static',
  adapter: vercel({
    imageService: true,
    devImageService: 'squoosh',
    isr: true,
    maxDuration: 10, // max # seconds a serverless function can run (to be safe)
  }),
  site: 'https://openapi.tools',
  trailingSlash: 'never',
});
