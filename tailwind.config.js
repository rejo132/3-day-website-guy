/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        card: 'var(--card)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        orbitron: ['var(--font-orbitron)', 'monospace'],
        exo2: ['var(--font-exo2)', 'sans-serif'],
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
