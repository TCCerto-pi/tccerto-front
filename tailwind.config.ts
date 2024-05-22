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
        main: "#4965BF",
        white: "#FFFFFF",
        "shadow-blue": "#6D8FFF",
        black: "#000000",
        "blue-shadow": "#6D8FFF",
      },
    },
  },
  plugins: [],
};
export default config;
