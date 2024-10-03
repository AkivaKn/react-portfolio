export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'landscape-mobile': { 'raw': '(max-height: 700px) and (orientation: landscape)' }
      }
    },
  },
  plugins: [],
};
