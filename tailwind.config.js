/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cstgrad': 'linear-gradient(181deg, #f0f1f0, #e7f9e8)',
      },
    },
  },
  plugins: [],
}

