/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        navy: "#1a365d",
        "navy-dark": "#11223f", // the hover/active shade already used via [#11223f] arbitrary values
        purple: "#6b21a8",
        gold: "#c9a84c",
        "gold-dark": "#80651c", // gold that is readable as text on white (5.4:1)
      },
      // Layered, navy-tinted shadows: closer to how real light falls than a
      // single grey blur, which is what gives cards their sense of depth.
      boxShadow: {
        depth: "0 1px 2px rgb(17 34 63 / 0.06), 0 6px 12px -4px rgb(17 34 63 / 0.10), 0 20px 40px -16px rgb(17 34 63 / 0.22)",
        lift: "0 2px 4px rgb(17 34 63 / 0.06), 0 14px 24px -8px rgb(17 34 63 / 0.18), 0 36px 64px -24px rgb(17 34 63 / 0.38)",
      },
    },
  },
  plugins: [],
};
