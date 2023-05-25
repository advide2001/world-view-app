/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gradient colors
        "light-purple": "#B683FF",
        "dark-purple": "#8000FF",

        // Inputs
        // dark-gray
        "light-input": "#858585",
        // midnight-gray
        "dark-input": "#858585",

        // Backgrounds
        // very-dark-blue
        "dark-bg": "#121E2E",
        // very-light-gray
        "light-bg": "#EAEAEA",

        // Elements
        // white
        "light-elements": "#FFFFFF",
        // dark-blue
        "dark-elements": "#283640",

        // Text
        // white
        "dark-text": "#FFFFFF",
        // very-dark-blue
        "light-text": "#0D1C28",
      },
    },
  },
  plugins: [],
};
