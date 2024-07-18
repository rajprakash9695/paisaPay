/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        'gradient-border': 'transparent', // Placeholder for the gradient
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.border-gradient-bottom': {
          borderBottomWidth: '2px',
          borderBottomStyle: 'solid',
          borderImage:
            'linear-gradient(89.03deg, rgba(0, 195, 253, 0.02) -18.33%, #00c3fd 23.35%, #0194fe 60.49%, rgba(1, 148, 254, 0) 108.53%) 1',
        },
      });
    },
  ],
};
