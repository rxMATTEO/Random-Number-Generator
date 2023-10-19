/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}"],
  theme: {
    extend: {
      backgroundImage: {
          'gradient-blue': 'linear-gradient(251.87deg, #061178 21.26%, #ADC6FF 75.7%)',
        },
        textColor: {
          'ultra-violet': 'rgba(3, 8, 82, 1)'
        }
    },
  },
  plugins: [],
}