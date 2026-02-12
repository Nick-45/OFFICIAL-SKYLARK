/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EBEAFE',
          100: '#D6D5FD',
          200: '#ADABFA',
          300: '#8581F7',
          400: '#5C57F4',
          500: '#4F46E5',
          600: '#3C35B8',
          700: '#2D278A',
          800: '#1E1A5C',
          900: '#0F0D2E',
        },
        secondary: {
          DEFAULT: '#F43F5E',
          50: '#FFE9EC',
          100: '#FFD3DA',
          200: '#FEA7B5',
          300: '#FE7B90',
          400: '#FD4F6B',
          500: '#F43F5E',
          600: '#C2324B',
          700: '#902638',
          800: '#5E1926',
          900: '#2C0D13',
        },
        'background-light': '#FFFFFF',
        'background-dark': '#0F172A',
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'ios': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
        'ios-lg': '0 8px 28px 0 rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
  corePlugins: {
    container: false,
  },
}
