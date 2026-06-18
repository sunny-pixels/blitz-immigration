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
        "light-cream": "#F7F1DE",
        "sage-green": "#B0BA99",
        "brown": "#9D6638",
        "dark-brown": "#4E220F",
      },
    },
  },
  plugins: [],
};
export default config;
