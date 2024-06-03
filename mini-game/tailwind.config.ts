import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mini-game": "url('/public/mini-game.png')",
        "play-btn": "url('/public/play-btn.png')",
        "coins": "url('/public/coins.png')",
      },
    },
  },
  plugins: [],
};
export default config;
