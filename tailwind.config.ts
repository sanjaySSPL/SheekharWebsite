import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'medium_blue' : "#2092F6",
        "dark_blue": "#055CA0",
        "text_white":"#ffffff",
        "light_orange" : "#FEF8D0",
        "text_blue":"#343884",
        "bg_light_blue":"#F2F1F8"
      },
    },
  },
  plugins: [],
};
export default config;
