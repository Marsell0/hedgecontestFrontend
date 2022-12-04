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
        bg_color: '#F5F5F5',
        border_input: '#b3b3b3',
        hover_white: '#b3b9ba'
      },
      maxHeight:{
        header: '70px',
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
        modal: '560px',
        input: '487px'
      },
      height:{
        modal: '670px',
        input: '30px'
      },
      fontSize:{
        modalHeader: '50px'
      },
      flex:{
        main: '1 0 auto',
        footer: '0 0 auto',
        full_width: '1'
      }
    },
  },
  plugins: [],
}
