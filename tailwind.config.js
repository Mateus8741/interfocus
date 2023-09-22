/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        contrast: {
          300: "#AFDA51",
          700: "#62A856",
        },

        text: {
          100: "#707070",
          200: "#404040",
        },

        divider: "#E8E8E8",

        background: "#FAFAFA",

        cardsColor: "#FFFFFF",

        error: "#CE2929",
      },

      fontFamily: {
        Regular: 'OpenSans_400Regular',
        SemiBold: 'OpenSans_600SemiBold',
        Bold: 'OpenSans_700Bold',
      },
    },
  },
  plugins: [],
}

