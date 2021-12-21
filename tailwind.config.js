module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      clash: "ClashDisplay-Variable",
      karla: "Karla-Variable",
    },
    colors: {
      black: "#000",
      white: "#fff",
      gray: {
        200: "#F7F9FC",
        400: "#E4E9F2",
        600: "#8F9BB3",
        700: "#57688B",
        800: "#222B45",
        900: "#192038",
      },
      orange: {
        default: "#E34325",
        varient1: "#DC340A",
        varient2: "#E16442",
        light: "#FFE3CE",
      },
      night: "#271B3F",
    },
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
