import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
