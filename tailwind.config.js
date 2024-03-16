/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx,astro}',
    './pages/**/*.{js,ts,jsx,tsx,mdx,astro}',
    './components/**/*.{js,ts,jsx,tsx,mdx,astro}',
    './src/**/*.{js,ts,jsx,tsx,mdx,astro}',
  ],
  theme: {
    extend: {
      colors: {
        // ... your color definitions
      },
      fontFamily: {
        futura: ['Futura', 'Trebuchet MS', 'Arial', 'sans-serif'], // Custom Futura font
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: `${theme('fontFamily.futura')}`,
              textTransform: 'uppercase',
            },
          },
        },
      }),
    },
  },
  plugins: ['@tailwindcss/typography'],
};
