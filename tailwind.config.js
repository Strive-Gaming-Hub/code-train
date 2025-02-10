/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "custom-gradient":
      //     "radial-gradient(57.89% 132% at 65.79% -35%, rgba(120, 123, 255, 0.06) 0%, rgba(120, 123, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 54.17%, rgba(255, 255, 255, 0.04) 100%), rgba(255, 255, 255, 0.01)",
      //   "primary":
      //     "linear-gradient(180deg, rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, .42) 100%), rgba(113, 47, 255, .24)",
      // },
      backgroundImage: {
        primary: "linear-gradient(180deg, rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, 0.42) 100%), rgba(113, 47, 255, 0.24)",
      },
      backgroundColor: {},
      fontFamily: {
        ubuntu: ["Ubuntu", "serif"],
        Gabarito: ["Gabarito", "serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
