module.exports = {
  theme: {
    screens: {
      sm: '870px',
      md: '1140px',
      lg: '1600px',
    },
    extend: {
      backgroundColor: {
        'hack-blue': '#1F4BD8',
        'hack-yellow': '#FFBD3B',
        'hack-pink': '#EA3883',
        'hack-green': '#BDE321',
      },
      textColor: {
        'hack-blue': '#1F4BD8',
        'hack-yellow': '#FFBD3B',
        'hack-pink': '#EA3883',
        'hack-green': '#BDE321',
      },
    },
  },
  variants: { display: ['responsive', 'hover', 'focus'] },
  plugins: [],
};
