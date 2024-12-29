import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        shine:'#90ddf0',
        "shine-70":'linear-gradient(90deg, rgba(83, 127, 138, 0.00) 0%, rgba(144, 221, 240, 0.00) 100%)',
        "white-70":"rgba(255, 255, 255, 0.70)",
        "white-90":"rgba(255, 255, 255, 0.90)"
      },
    },
  },
  plugins: [],
} satisfies Config;
