/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./contexts/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./providers/**/*.{js,jsx,ts,tsx}",
    "./services/**/*.{js,jsx,ts,tsx}",
    "./store/**/*.{js,jsx,ts,tsx}",
    "./types/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'poppins-thin': ['Poppins-Thin'],
        'poppins-extralight': ['Poppins-ExtraLight'],
        'poppins-light': ['Poppins-Light'],
        'poppins': ['Poppins-Regular'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-semibold': ['Poppins-SemiBold'],
        'poppins-bold': ['Poppins-Bold'],
        'poppins-extrabold': ['Poppins-ExtraBold'],
        'poppins-black': ['Poppins-Black'],
      },
      colors: {
        'black': {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#333333',
          700: '#666666',
          800: '#999999',
          900: '#cccccc'
        },
        'baby_powder': {
          DEFAULT: '#fffffc',
          100: '#656500',
          200: '#caca00',
          300: '#ffff30',
          400: '#ffff95',
          500: '#fffffc',
          600: '#fffffb',
          700: '#fffffc',
          800: '#fffffd',
          900: '#fffffe'
        },
        'khaki': {
          DEFAULT: '#beb7a4',
          100: '#29261d',
          200: '#524c3a',
          300: '#7c7258',
          400: '#a09679',
          500: '#beb7a4',
          600: '#cbc5b5',
          700: '#d8d3c8',
          800: '#e5e2da',
          900: '#f2f0ed'
        },
        'orange_(wheel)': {
          DEFAULT: '#ff7f11',
          100: '#361900',
          200: '#6c3200',
          300: '#a24c00',
          400: '#d86500',
          500: '#ff7f11',
          600: '#ff993f',
          700: '#ffb26f',
          800: '#ffcc9f',
          900: '#ffe5cf'
        },
        'red': {
          DEFAULT: '#ff1b1c',
          100: '#380000',
          200: '#700000',
          300: '#a80000',
          400: '#e00000',
          500: '#ff1b1c',
          600: '#ff4747',
          700: '#ff7575',
          800: '#ffa3a3',
          900: '#ffd1d1'
        }
      }
    },
  },
  plugins: [],
}

