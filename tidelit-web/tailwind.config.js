/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00396D',    // Azul marino profundo
        'secondary': '#005A6D',  // Azul verdoso
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        overlayShow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.5' },
        },
        modalShow: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95) translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        overlayShow: 'overlayShow 0.3s ease-out forwards',
        modalShow: 'modalShow 0.3s ease-out forwards',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
    },
  },
  plugins: [],
}