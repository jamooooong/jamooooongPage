/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInDown: "fadeInDown 0.7s ease-in-out",
        growDown: "growDown 0.5s ease-in-out",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        growDown: {
          "0%": {
            maxHeight: "0",
            opacity: 0,
          },
          "100%": {
            maxHeight: "500px", // 필요한 만큼 크게 설정
            opacity: 1,
          },
        },
      },
    },
    colors: {
      white: "#ffffff",
      black1D: "#1D1D1D",
      mainDarkGray: "#424243",
      mainLightGray: "#F5F5F7",
      mainGray: "#D6D6D6",
    },
  },

  plugins: [],
};
