/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Quartum Games brand – premium European tech
        quartum: {
          primary: 'var(--quartum-primary)',
          secondary: 'var(--quartum-secondary)',
          accent: 'var(--quartum-accent)',
          dark: 'var(--quartum-dark)',
          muted: 'var(--quartum-muted)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
