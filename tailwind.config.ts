import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
