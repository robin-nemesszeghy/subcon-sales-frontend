/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "notebook-bg": "#F7F4EE",
        "notebook-card": "#ECE6D8",
        "leather-dark": "#3B2A20",
        "leather-medium": "#6A4E3D",
        "accent-blue": "#229AD6",
        charcoal: "#262220",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      keyframes: {
        drive: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(105vw)" },
        },
      },
      animation: {
        drive: "drive 14s linear infinite",
      },
    },
  },
  plugins: [],
};
