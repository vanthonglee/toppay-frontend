module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'san-mulish': ['Mulish'],
      'san-montserrat': ['Montserrat']
    },
    extend: {
      colors: {
        primary: '#37393E',
        secondary: '#0554F2',
        dark: {
          300: '#F9FAFB',
          400: '#B0B3B9',
          700: '#55575C',
          800: '#37393E',
          900: '#17191D'
        },
        neutral: {
          2: '#f4f6f8',
          6: '#909398'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
