import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        venturi: {
          dark: '#050810',
          gold: '#C5A059'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(197, 160, 89, 0.2)'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(120deg, rgba(197,160,89,0.25), rgba(197,160,89,0.05))'
      }
    }
  },
  plugins: []
};

export default config;
