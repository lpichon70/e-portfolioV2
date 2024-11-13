import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://lpichon70.github.io',
  base: '/e-portfolioV2',
});
