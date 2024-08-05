/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
 fontFamily: {
        'Raleway': ["Raleway",'sans-serif'],
        'Greatvibes': ["Great Vibes", "cursive"],
      
        },

        keyframes: {
          slidein: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        animation: {
          slidein: 'slidein 0.5s forwards',
        },
      
    },
  },
  plugins: [],
}

