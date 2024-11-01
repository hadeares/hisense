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
        hisense: '#00B3AC',
        dark: '#010609',
      },
      fontFamily: {
        custom: ['hisense', 'sans-serif'], // Nome da fonte personalizada
      },
    },
  },
  plugins: [],
};
export default config;
