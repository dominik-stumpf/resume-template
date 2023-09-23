/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "var(--black)",
        "white": "var(--white)",
        "forest-green": "var(--forest-green)",
        "dim": "var(--dim)",
        "body": "var(--body)",
      },
    },
  },
  plugins: [],
};
