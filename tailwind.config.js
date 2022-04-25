module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        'yellow': '6px 6px 25px #8E8E20',
        
     },
      colors:{
        darkYellow: "#8E8E20",
        Wisky:"#8E8E20",
        Vodka:'#F60404',
        Gin:'#58A9E6',
        Champagne:"#F635F0",
      },
      fontFamily:{
        anek: ['Anek Telugu , serif'],
      },
    },
  },
  plugins: [require('tailwindcss-textshadow'),
  require('tailwind-scrollbar-hide')
  ],
}
