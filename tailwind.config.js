/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#070B10',
          sub: '#0D141B',
          surface: '#121B23',
          elevated: '#17232C',
          card: '#141E26',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-subtle': 'rgba(255, 255, 255, 0.05)',
        },
        light: {
          bg: '#F8FAFC',
          sub: '#F1F5F9',
          surface: '#FFFFFF',
          elevated: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E2E8F0',
          'border-subtle': 'rgba(15, 23, 42, 0.06)',
          text: '#0F172A',
          muted: '#64748B',
        },
        // Purpose-Driven Functional Accents:
        emerald: {
          DEFAULT: '#4ADE80',
          400: '#4ADE80', // Skills, Success, Readiness
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          glow: 'rgba(74, 222, 128, 0.25)',
        },
        teal: {
          DEFAULT: '#22D3EE',
          400: '#22D3EE', // AI, Intelligence, Data
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          glow: 'rgba(34, 211, 238, 0.25)',
        },
        violet: {
          DEFAULT: '#A78BFA',
          400: '#A78BFA', // Learning, Career Pathways
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          glow: 'rgba(167, 139, 250, 0.25)',
        },
        amber: {
          DEFAULT: '#F59E0B',
          400: '#FBBF24', // Alerts, Opportunities, Insights
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          glow: 'rgba(245, 158, 11, 0.25)',
        },
        rose: {
          DEFAULT: '#FB7185',
          400: '#FB7185', // Critical gaps, Danger
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
          glow: 'rgba(251, 113, 133, 0.25)',
        },
        slate: {
          850: '#0F1720',
          900: '#0A1017',
          950: '#070B10',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'surface': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'surface-elevated': '0 12px 32px -4px rgba(0, 0, 0, 0.65)',
        'surface-light': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'surface-elevated-light': '0 16px 40px -4px rgba(15, 23, 42, 0.12)',
        'glow-emerald': '0 0 20px rgba(74, 222, 128, 0.25)',
        'glow-teal': '0 0 20px rgba(34, 211, 238, 0.25)',
        'glow-violet': '0 0 20px rgba(167, 139, 250, 0.25)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.25)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '14px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin-reverse 25s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
