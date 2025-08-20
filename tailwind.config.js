/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'mango': '#FF8C42', // Naranja medio dorado
        'mango-light': '#FFB366',
        'mango-dark': '#E67429',
        'dark-gray': '#1A1A1A',
        'medium-gray': '#2A2A2A',
        'light-gray': '#3A3A3A'
      }
    },
  },
  plugins: [],
};