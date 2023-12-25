const defaultTheme = require("tailwindcss/defaultTheme");

export default module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      height: {
        dashboardTop: "5.7rem",
      },
      keyframes: {
        kanbanLoader: {
          "0%,100%": {
            transform: " scale(0)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },

      animation: {
        kanbanLoader: "kanbanLoader 1s ease-in-out infinite",
      },
    },
    colors: {
      mainPurple: "#635FC7",
      mainPurpleHover: "#A8A4FF",
      black: "#000112",
      veryDarkGrey: "#20212C",
      darkGrey: "#2B2C37",
      linesDark: "#3E3F4E",
      linesLight: "#E4EBFA",
      mediumGrey: "#828FA3",
      lightGreyLightBG: "#F4F7FD",
      white: "#FFFFFF",
      red: "#EA5555",
      redHover: "#FF9898",
    },
    fontSize: {
      headingXl: ["1.5rem", { lineHeight: "1.875rem", fontWeight: "700" }],
      headingLg: ["1.125rem", { lineHeight: "1.4375rem", fontWeight: "700" }],
      headingM: ["1rem", { lineHeight: "1.1875rem", fontWeight: "700" }],
      headingS: [".75rem", { lineHeight: "1rem", lineSpacing: ".25rem", fontWeight: "700" }],
      bodyLg: [".8125rem", { lineHeight: "1.875rem", fontWeight: "500" }],
      bodyM: [".75rem", { lineHeight: "1rem", fontWeight: "700" }],
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
