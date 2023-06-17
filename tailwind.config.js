/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        rajdhani: ['Rajdhani']
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-blue-600',
    'bg-black'
  ]
}

