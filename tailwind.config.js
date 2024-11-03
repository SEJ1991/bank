/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color-default)',
          300: 'var(--primary-color-300)',
          500: 'var(--primary-color-500)',
        },
      },
      height: {
        navi: 'var(--navigator-height)',
      },
    },
  },
  plugins: [],
};
