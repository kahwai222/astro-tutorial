import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://thriving-cranachan-e998cf.netlify.app",
  integrations: [preact()]
});