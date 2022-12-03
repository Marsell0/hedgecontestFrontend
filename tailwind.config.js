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
        bg_color: '#F5F5F5'
      },
      maxHeight:{
        header: '60px',
      },
      maxWidth:{
        container: '1584px'
      },
      margin: {
        container: '0px auto',
        modal: '100px'
      },
      spacing: {
        modal: '50px'
      },
      boxShadow:{
        modal: '0px 0px 15px 0px'
      },
      width:{
        modal: '560px'
      },
      height:{
        modal: '670px'
      },
      fontSize:{
        modalHeader: '50px'
      }
    },
  },
  plugins: [],
}
