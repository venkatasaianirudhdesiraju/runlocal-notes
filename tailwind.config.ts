import type { Config } from "tailwindcss";

const config: Config = {
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
        surface: "var(--surface)",
        border: "var(--border)",
        muted: "var(--muted)",
        accent: "var(--accent)",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--foreground)",
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
