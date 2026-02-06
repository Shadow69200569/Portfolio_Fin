/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Main Portfolio Colors
        "primary": "#0da6f2",
        "background-light": "#f5f7f8",
        "background-dark": "#101c22",
        "neon-pink": "#ff00ff",
        "deep-violet": "#1a0b2e",
        "sakura-pink": "#ffb7c5",
        "sakura-glow": "#ff69b4",

        // Loading Screen Specific variants
        "loader-primary": "#25c0f4",
        "loader-pink": "#ff2d55",
        "loader-bg": "#0a0510",
      },
      fontFamily: {
        "pixel": ["'Press Start 2P'", "cursive"],
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
