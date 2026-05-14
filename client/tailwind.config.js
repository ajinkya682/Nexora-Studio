/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0F1A',
          secondary: '#111827',
          surface: '#1A2035',
        },
        brand: {
          primary: '#FF4D2E',
          secondary: '#7C5CFF',
        },
        text: {
          primary: '#F9FAFB',
          secondary: '#9CA3AF',
        },
        border: {
          DEFAULT: '#1F2A40',
        },
        success: '#10B981',
        error: '#EF4444',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'draw-line': 'drawLine 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(255, 77, 46, 0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(255, 77, 46, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
        'brand': '0 0 30px rgba(255, 77, 46, 0.3)',
        'purple': '0 0 30px rgba(124, 92, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
