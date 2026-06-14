/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        vblack: '#030303',
        carbon: '#0a0b0d',
        graphite: '#13161b',
        steel: '#c9d1d9',
        muted: '#7b8493',
        gold: '#d8b56d',
        amberline: '#fff1bf'
      },
      boxShadow: {
        gold: '0 0 30px rgba(216,181,109,.25)',
        whiteGlow: '0 0 40px rgba(255,255,255,.16)'
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at 20% 10%, rgba(216,181,109,.16), transparent 26%), radial-gradient(circle at 80% 0%, rgba(255,255,255,.08), transparent 28%), linear-gradient(180deg, #030303 0%, #08090b 55%, #030303 100%)'
      }
    }
  },
  plugins: []
}
