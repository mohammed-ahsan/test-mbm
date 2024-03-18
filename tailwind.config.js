module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafafa",
          100: "#f7f7f7",
          500: "#909090",
          800: "#3c3c3c",
          "100_01": "#faf6f4",
          "100_b2": "#f5f5f5b2",
        },
        white: { A700: "#ffffff" },
        deep_orange: { A200: "#f47d31", A200_e5: "#f47d31e5" },
        blue_gray: { 900: "#353434" },
      },
      boxShadow: { xs: "0px 4px  4px 5px #0000000c", sm: "0px 4px  4px 0px #0000003f" },
      fontFamily: { raleway: "Raleway" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
