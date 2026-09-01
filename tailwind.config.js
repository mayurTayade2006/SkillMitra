/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#164B36',
          hover: '#113A2A',
          dark: '#0D2D20',
          tint: '#EBF2EE',
          faint: '#F2F7F4',
        },
        warm: {
          DEFAULT: '#FAF9F5',
          surface: '#FFFFFF',
          sand: '#F3F0E8',
          border: '#E5E2DA',
          subtle: '#EDEAE2',
        },
        charcoal: {
          DEFAULT: '#1D2421',
          muted: '#4A5550',
          light: '#65726C',
        },
        sage: {
          DEFAULT: '#789184',
          light: '#A4B8AD',
          tint: '#EDF3F0',
        },
        saffron: {
          DEFAULT: '#E28A3B',
          hover: '#CD782B',
          tint: '#FDF4EC',
          border: '#F8DCBE',
        },
        terracotta: {
          DEFAULT: '#C9634C',
          tint: '#FAF0ED',
          border: '#F5DCD5',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(29, 36, 33, 0.04)',
        'card': '0 2px 6px -1px rgba(29, 36, 33, 0.04), 0 1px 3px -1px rgba(29, 36, 33, 0.02)',
        'elevated': '0 12px 28px -6px rgba(29, 36, 33, 0.07), 0 4px 10px -2px rgba(29, 36, 33, 0.03)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      }
    },
  },
  plugins: [],
}
