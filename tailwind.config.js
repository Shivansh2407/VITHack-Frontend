module.exports = {
  theme: {
    screens: {
      sm: '870px',
      md: '1140px',
      lg: '1600px',
    },
    extend: {
      backgroundColor: {
        'hack-blue': '#008DFF',
        'hack-yellow': '#FFBD3B',
        'hack-pink': '#EA3883',
        'hack-green': '#BDE321',
        'hack-black': '#131313',
      },
      textColor: {
        'hack-blue': '#008DFF',
        'hack-yellow': '#FFBD3B',
        'hack-pink': '#EA3883',
        'hack-green': '#BDE321',
        'hack-black': '#131313',
      },
      spacing: {
        28: '7rem',
        35: '8.75rem',
      },
    },
  },
  variants: { display: ['responsive', 'hover', 'focus'] },
  plugins: [],
};
