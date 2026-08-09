module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        cyberbg: '#05020a',
        neonpurple: '#7c4dff',
        neonblue: '#00e5ff'
      },
      boxShadow: {
        glow: '0 0 45px rgba(124,77,255,0.2)'
      }
    }
  },
  plugins: []
}
