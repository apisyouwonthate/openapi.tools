import type { KnipConfig } from "knip";

const config: KnipConfig = {
  // UI primitives and icons are a shared library — exports are used dynamically
  ignore: ["src/components/ui/**", "src/components/icons/**"],

  // Icon and UI components re-export named + default — this is intentional
  exclude: ["duplicates"],
};

export default config;
