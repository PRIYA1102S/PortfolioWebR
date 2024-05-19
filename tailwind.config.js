
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-blue': '#183148',
        'custom-gray': '#D2D2D9',
        'sunny-yellow': '#EECE95',
        'midnight-blue': '#040529',
        'deep-space': 'rgb(17, 24, 39)',
        'navy-dark': '#002147',
        'white': '#fdfdff',
        'dark-gray': '#939498',
        'bluei': '#37538C',
        'blue1': '565D73',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-left': 'fadeInLeft 0.5s ease-out',
        'fade-in-right': 'fadeInRight 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    }
  },
  plugins: [],
}

