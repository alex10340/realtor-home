/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "system-ui", "Helvetica", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#8476ff",
          secondary: "#7161ff",
          neutral: "#3a3859",
        },
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          primary: "#8476ff",
          secondary: "#7161ff",
          neutral: "#d5d1fc",
        },
      },
    ],
  },
};
