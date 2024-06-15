/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Ubuntu", "system-ui", "Helvetica", "sans-serif"],
      serif: ["Lusitana", "system-ui"],
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
