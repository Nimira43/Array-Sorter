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
        'primary': '#1fda1f',
        'primary-dark': '#08a108',
        'primary-light': '#5bde5b',
        'dark-extra': '#010101',
        'dark': '#111',
        'light': '#eeffee'
      },
    },
  },
  plugins: [],
}
export default config
