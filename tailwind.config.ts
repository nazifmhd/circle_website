import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        circle: {
          gold: '#B8860B',
          wheat: '#F5DEB3',
          earth: '#8B7355',
          forest: '#2D5016',
          cream: '#FDF8F0',
          stone: '#5C5346',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'circle': '0 4px 24px -4px rgba(45, 80, 22, 0.12), 0 8px 32px -8px rgba(45, 80, 22, 0.08)',
        'circle-lg': '0 12px 40px -8px rgba(45, 80, 22, 0.15), 0 24px 64px -16px rgba(45, 80, 22, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
