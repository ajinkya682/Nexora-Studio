/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E8381A',    // Bold Red-Orange
          secondary: '#1A1A1A',  // Dark Charcoal
          muted: '#6B6B6B',      // Medium Gray
        },
        bg: {
          primary: '#FAF9F6',    // Warm Off-White / Cream
          secondary: '#FFFFFF',  // Clean White for cards
          surface: '#F5F4F0',    // Slightly deeper cream
          dark: '#0D1117',       // Dark Navy contrast
        },
        text: {
          primary: '#1A1A1A',    // Headings
          secondary: '#6B6B6B',  // Body copy
          muted: '#999999',      // mutes
          white: '#FFFFFF',
        },
        border: {
          DEFAULT: 'rgba(0,0,0,0.06)',
          dark: 'rgba(255,255,255,0.1)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 60px -15px rgba(0, 0, 0, 0.08)',
        'brand': '0 10px 25px -5px rgba(232, 56, 26, 0.2)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      }
    },
  },
  plugins: [],
}
