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
        primary: "#A02735",
        secundary: "#CF0144",
        tertiary: "#F4B34D",
        quaternary: "#FFDA99",
      },
      width: {
        '1200': '1200px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          LinearAgballoons: "linear-gradient(to bottom, var(--tw-color-tertiary, var(--tw-color-secundary)"
      },
    },
  },
  plugins: [],
};
export default config;
