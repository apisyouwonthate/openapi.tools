import type { KnipConfig } from "knip";

const config: KnipConfig = {
  // UI primitives and icons are a shared library — exports are used dynamically
  // StaticPageLayout is referenced via markdown frontmatter `layout:` which knip can't detect
  ignore: ["src/components/ui/**", "src/components/icons/**"],
  ignoreDependencies: ["@astrojs/ts-plugin"],

  // Icon and UI components re-export named + default — this is intentional
  exclude: ["duplicates"],
};

export default config;
