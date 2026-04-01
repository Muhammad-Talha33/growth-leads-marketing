import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue':   '#0F4C81',
        'brand-orange': '#F97316',
        'brand-navy':   '#0B1F3A',
        'brand-light':  '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(15, 76, 129, 0.08)',
        'card-hover': '0 8px 40px rgba(15, 76, 129, 0.16)',
      },
    },
  },
  plugins: [],
}

export default config
