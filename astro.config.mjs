import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [sitemap(), react(), tailwind({
    // Example: Allow writing nested CSS declarations
    // alongside Tailwind's syntax
    nesting: true
  })],
  // @see hosting with vercel https://docs.astro.build/en/guides/integrations-guide/vercel/
  output: 'static',
  adapter: vercel({
    imageService: true,
    devImageService: 'squoosh',
    isr: true,
    maxDuration: 10 // max # seconds a serverless function can run (to be safe)
  }),
  site: "https://openapi.tools",
  trailingSlash: 'never',

});
