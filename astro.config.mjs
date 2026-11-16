import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // The live address of the site (no trailing slash). The QR code, link
  // previews (Open Graph) and canonical URLs are all built from this.
  // TODO: change this once the church's own domain is set up.
  site: 'https://mountzionkiitwe.netlify.app',
  integrations: [tailwind()],
});
