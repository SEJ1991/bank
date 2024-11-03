/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#202020',
        300: '#2E2E2E',
        500: '#1E1E1E',
      },
    },
    extend: {},
  },
  plugins: [],
};
