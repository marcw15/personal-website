import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  plugins: [require('@tailwindcss/typography')],
  output: "server",
  adapter: cloudflare(),
  prefetch: {
    prefetchAll: true
  },
  build: {
    inlineStylesheets: `never`,
  },
  experimental: {
    optimizeHoistedScript: true,
  }
});