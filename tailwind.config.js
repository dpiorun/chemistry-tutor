/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    data: {
      active: 'ui~="active"',
    },
    screens: {
      large: "1600px",
      middle: "1040px",
      small: "768px",
      laptop: "1390px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        lineheight: {
          "0%": {
            height: "0%",
          },
          "100%": {
            height: "100%",
          },
        },
        lineround: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(200%)",
          },
        },
      },
      animation: {
        lineheight: "lineheight 1000ms ease-in-out 0s forwards",
        lineround: "lineround 1200ms linear 2000s infinite",
      },
    },
  },
  plugins: [],
};
