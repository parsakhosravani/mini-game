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
        "mini-game": "url('/mini-game.png')",
        "play-btn": "url('/play-btn.png')",
        "coins": "url('/coins.png')",
      },
    },
  },
  plugins: [],
};
export default config;
