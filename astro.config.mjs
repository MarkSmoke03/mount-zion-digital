import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // TODO: set this to wherever this site actually deploys (no trailing slash) -
  // e.g. a new domain, or a subdomain of mtz.org.zm if this Kitwe site lives
  // under the main organization's domain. Needed so the QR code component can
  // build an absolute, scannable URL - also powers canonical/OG/sitemap URLs
  // if you add those later.
  site: "https://REPLACE-WITH-YOUR-DOMAIN.example",
  integrations: [tailwind()],
});
