  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        colors: {
          primary: '#4F934A'
        },
        fontFamily: {
          inter: 'Inter, Helvetica, sans-serif'
        },
        boxShadow: {
          default: '0px 2px 7px 1px rgba(0,0,0,0.06)'
        },
        spacing: {
          '98': '26rem'
        }
       }
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }