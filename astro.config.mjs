import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      lastmod: new Date(),
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://openapi.tools/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Categories and collections get high priority
        if (
          item.url.includes('/categories/') ||
          item.url.includes('/collections/')
        ) {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        // Tools index gets high priority
        if (item.url === 'https://openapi.tools/tools') {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        // Individual tool pages
        if (item.url.includes('/tools/')) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }
        // Static pages (sponsor, contributing, legacy)
        return { ...item, priority: 0.5, changefreq: 'monthly' };
      },
    }),
    react({
      experimentalReactChildren: true,
    }),
    pagefind(),
  ],
  // @see hosting with netlify https://docs.astro.build/en/guides/integrations-guide/netlify/
  output: 'static',
  adapter: netlify(),
  site: 'https://openapi.tools',
  trailingSlash: 'never',
});
