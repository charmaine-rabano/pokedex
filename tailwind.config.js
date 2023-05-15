/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#4E6773',
        'navy-blue': '#263238',
        'off-white': '#F5F6F6',
        'denim-blue': '#3761A8',
        'powder-blue': '#7597D2',
        'yellow': '#FECA1B',
        'light-yellow': '#FEE180',
      },
    },
  },
  plugins: [],
}
