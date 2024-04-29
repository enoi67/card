/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        modelS: "url('/src/assets/Model-S-bg.avif')",
        model3: "url('/src/assets/Model-3-bg.avif')",
        modelX: "url('/src/assets/Model-X-bg.avif')",
      }
    },
  },
  plugins: [],
}