/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      'title' : ['"Kaushan Script"'],
      'body': ['"Inter"'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
  },
  plugins: [],
}

