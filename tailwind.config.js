/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
      },

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
      //메인화면 용
      red_01: "#F7352C",
      red_01_hover: "#FF6B64",
      red_01_press:"#A01428",
      gray_bg_01: "#F9FAFB ",
      modal_bg :"#222222",
      gray_01: "#222222",
      gray_02: "#717171",
      gray_03:"#F9FAFB"

    },
  },

  plugins: [],
};
