/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 6s linear infinite',
      },
      fontFamily: {
        display: ['Oswald'],
        body: ['"Open Sans"'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
    plugins: [],
  },
}
