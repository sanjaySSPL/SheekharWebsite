import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'medium_blue' : "#2092F6",
        "dark_blue": "#055CA0",
        "text_white":"#ffffff",
        "light_orange" : "#FEF8D0",
        "text_blue":"#343884",
      },
    },
  },
  plugins: [],
};
export default config;
