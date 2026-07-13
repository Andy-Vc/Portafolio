/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#09090B',
          secondary: '#111118',
          card: '#17171F',
          border: '#242433'
        },
        foreground: {
          primary: '#F5F5F7',
          secondary: '#B3B3C2',
          muted: '#7E7E93'
        },
        brand: {
          DEFAULT: '#7C3AED',
          hover: '#8B5CF6',
          accent: '#A855F7',
          light: '#C084FC',
          glow: 'rgba(124,58,237,.35)'
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0, 0, 0, 0.28)',
        card: '0 18px 60px rgba(0, 0, 0, 0.32)',
        brand: '0 0 0 1px rgba(124, 58, 237, 0.24), 0 16px 40px rgba(124, 58, 237, 0.14)',
        glow: '0 0 40px rgba(124, 58, 237, 0.22)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(124, 58, 237, 0.16), transparent 45%)',
        'card-gradient': 'linear-gradient(180deg, rgba(23, 23, 31, 0.96), rgba(17, 17, 24, 0.88))'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};