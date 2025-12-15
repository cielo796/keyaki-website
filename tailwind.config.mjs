/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        keyaki: {
          50: '#f0f9f4',
          100: '#dbf0e4',
          200: '#b9e1cc',
          300: '#8acbab',
          400: '#58af86',
          500: '#369369',
          600: '#267654',
          700: '#1f5f45',
          800: '#1b4c39',
          900: '#173f30',
          950: '#0b231a',
        },
        warm: {
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f2d9c0',
          300: '#e9be97',
          400: '#de9b6b',
          500: '#d6814c',
          600: '#c86a3f',
          700: '#a75436',
          800: '#874532',
          900: '#6d3a2b',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', 'Meiryo', 'sans-serif'],
        serif: ['"Noto Serif JP"', '"Hiragino Mincho ProN"', '"Yu Mincho"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
