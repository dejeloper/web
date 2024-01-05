/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        one: "#1f2024",
        two: "#003b8e",
        three: "#1564BF",
        four: "#5e91f2",
        five: "#92b8ff",
      },
    },
  },
  plugins: [],
};
