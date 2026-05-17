import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      },
      boxShadow: {
        glow: '0 20px 60px rgba(59, 130, 246, 0.16)'
      },
      backgroundImage: {
        gradientGlass: 'linear-gradient(135deg, rgba(10, 25, 47, 0.72), rgba(15, 23, 42, 0.48))'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
