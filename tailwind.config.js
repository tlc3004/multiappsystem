/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // colores personalizados si quieres
        'tumaki': '#FF4F5A',
        'garage': '#1A1A1A',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
