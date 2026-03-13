import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  // UI primitives and icons are a shared library — exports are used dynamically
  // StaticPageLayout is referenced via markdown frontmatter `layout:` which knip can't detect
  ignore: [
    'src/components/ui/**',
    'src/components/icons/**',
    'src/layouts/StaticPageLayout.astro',
  ],
  // Radix deps are used in ignored ui/ components; posthog-js is loaded via
  // script tag in PostHog.astro; framer-motion is a peer dep of ShadCN UI
  ignoreDependencies: [
    '@radix-ui/react-checkbox',
    '@radix-ui/react-scroll-area',
    'framer-motion',
    'posthog-js',
  ],

  // Icon and UI components re-export named + default — this is intentional
  exclude: ['duplicates'],
};

export default config;
