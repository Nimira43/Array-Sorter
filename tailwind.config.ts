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
        'primary': '#ff4500',
        'secondary': '#87ceeb',
        'dark': '#111',
        'light': '#fffcfa',
        'grey-extra-light': '#eee',
        'grey-light': '#ccc',
        'grey-medium': '#999',
        'grey-dark': '#333',
      },
    },
  },
  plugins: [],
}
export default config
