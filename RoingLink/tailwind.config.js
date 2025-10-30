/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: "#FF385C", // Airbnb accent
        },
      },
      keyframes: {
      adSlide: {
        "0%, 30%": { transform: "translateX(0)" },
        "33%, 63%": { transform: "translateX(-33.333%)" },
        "66%, 96%": { transform: "translateX(-66.666%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      adSlide: "adSlide 12s infinite ease-in-out",
    },
    },
  },
  plugins: [],
};
