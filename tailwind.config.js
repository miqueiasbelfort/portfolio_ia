/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.2' },
        },
        'bounce-smooth': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'width-grow': {
          '0%': {
            width: '0',
          },
          '100%': {
            width: '6rem',
          },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-smooth': 'bounce-smooth 1s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-delay': 'fade-in 0.5s ease-out 0.3s both',
        'width-grow': 'width-grow 1s ease-out 0.5s both',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} 