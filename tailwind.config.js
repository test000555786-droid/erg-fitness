/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:        '#D4AF37',
        'primary-light':'#FFD700',
        'primary-dark': '#B8962E',
        dark:           '#000000',
        'dark-2':       '#080808',
        'dark-3':       '#0A0A0A',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        accent:  ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark':   'linear-gradient(135deg, #000000 0%, #0A0A0A 100%)',
        'gradient-gold':   'linear-gradient(135deg, #D4AF37 0%, #B8962E 100%)',
        'gradient-glow':   'radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, transparent 70%)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow':    'spin 10s linear infinite',
        'marquee':      'marquee 25s linear infinite',
        'gold-shimmer': 'goldShimmer 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.2)' },
          '50%':      { boxShadow: '0 0 40px rgba(212,175,55,0.45)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        goldShimmer: {
          '0%':   { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
