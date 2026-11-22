/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'var(--color-surface)',
          secondary: 'var(--color-surface-secondary)',
          card: 'var(--color-surface-card)',
          border: 'var(--color-surface-border)',
          navbar: 'var(--color-navbar)',
          viewer: 'var(--color-project-viewer)'
        },
        foreground: {
          primary: 'var(--color-foreground-primary)',
          secondary: 'var(--color-foreground-secondary)',
          muted: 'var(--color-foreground-muted)'
        },
        brand: {
          DEFAULT: 'var(--color-brand)',
          hover: 'var(--color-brand-hover)',
          accent: 'var(--color-brand-accent)',
          light: 'var(--color-brand-light)',
          glow: 'var(--color-brand-glow)'
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0, 0, 0, 0.28)',
        card: '0 18px 60px rgba(0, 0, 0, 0.32)',
        brand: '0 0 0 1px var(--color-brand-glow)',
        glow: '0 0 40px var(--color-brand-glow)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, var(--color-brand-glow), transparent 45%)',
        'card-gradient': 'linear-gradient(180deg, var(--color-surface-card), var(--color-surface-secondary))'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};