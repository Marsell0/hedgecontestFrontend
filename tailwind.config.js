/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        main_green: '#717D70',
        hover_m_green: '#717D80',
      },
      maxHeight:{
        header: '60px',
      },
      maxWidth:{
        container: '1584px'
      },
      margin: {
        container: '0px auto'
      }
    },
  },
  plugins: [],
}
