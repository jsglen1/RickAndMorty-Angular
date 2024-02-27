/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        trinidad: {
          '50': '#fff7ed',
          '100': '#ffedd5',
          '200': '#fed7aa',
          '300': '#fdbb74',
          '400': '#fb933c',
          '500': '#f97416',
          '600': '#e0550b',
          '700': '#c2420c',
          '800': '#9a3512',
          '900': '#7c2e12',
          '950': '#431407',
        },
      },
    },
  },
  plugins: [],
}

