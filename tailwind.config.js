/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#FFFFFF',
          surface: '#F8F9FA',
          text: '#000000',
          'text-secondary': '#6B7280',
          accent: '#EC4899',
          'accent-secondary': '#A855F7',
        },
        dark: {
          bg: '#0A0A0B',
          surface: '#1A1A1D',
          text: '#FFFFFF',
          'text-secondary': '#9CA3AF',
          accent: '#06B6D4',
          'accent-secondary': '#84CC16',
          'accent-tertiary': '#3B82F6',
        },
      },
    },
  },
}
