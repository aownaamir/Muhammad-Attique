/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "theme-gray": "rgba(167, 190, 174, 1)",
        "theme-red": "rgba(184, 80, 66, 1)",
        "theme-bg": "rgba(231, 232, 209, 1)",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
