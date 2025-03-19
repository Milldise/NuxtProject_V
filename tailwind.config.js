/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./pages/**/*.vue",
    "./components/**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '480px'},
      },
    },
  },
  plugins: [],
};
