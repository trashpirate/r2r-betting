import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 35px 60px -15px rgba(255,107,16, 1)",
      },
      fontFamily: {
        body: ["IBM Plex Sans"],
      },
      screens: {
        xs: "465px",
        xxs: "372px",
      },
      colors: {
        primary: "#000000",
        highlight: "#67e8f9",
        background: "#4c1d95",
      },
      maxHeight: {
        maxH192: "30rem",
      },
      width: {
        wide: "500px",
      },
    },
  },
  plugins: [],
};
export default config;
