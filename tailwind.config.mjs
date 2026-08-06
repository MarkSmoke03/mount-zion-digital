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
      },
    },
  },
  plugins: [],
};
