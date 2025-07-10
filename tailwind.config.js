module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        title: ['Limelight', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
