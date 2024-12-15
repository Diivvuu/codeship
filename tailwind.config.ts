import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      boxShadow: {
        "custom-shadow": "-3px 2px 16.4px 0px #0000001A",
      },
      backgroundImage: {
        "custom-gradient": `linear-gradient(147.75deg, 
        #2B3391 -46.16%, 
        #353B95 -3.75%, 
        #514FA0 67.67%, 
        #7E6FB2 159.17%, 
        #8776B6 177.02%)`,
        "page2-bg": "url('../app/assets/page2-bg.png')",
        "page5-bg": "url('../app/assets/page5BG.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        active: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        active: "active 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
