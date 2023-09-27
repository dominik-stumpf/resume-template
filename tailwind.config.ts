import { fontVariationSettingsHelper } from './src/styles/font-variation-settings-helper';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      display: [
        'var(--serif), serif',
        {
          fontVariationSettings: fontVariationSettingsHelper({
            opticalSizing: 144,
            weight: 700,
          }),
        },
      ],
      'display-italic': [
        'var(--serif), serif',
        {
          fontVariationSettings: fontVariationSettingsHelper({
            opticalSizing: 144,
            wonk: 1,
            weight: 800,
          }),
        },
      ],
      'soft-serif': [
        'var(--serif), serif',
        {
          fontVariationSettings: fontVariationSettingsHelper({
            opticalSizing: 24,
            soft: 50,
            wonk: 1,
          }),
        },
      ],
      title: [
        'var(--serif), serif',
        {
          fontVariationSettings: fontVariationSettingsHelper({
            weight: 400,
            opticalSizing: 64,
            soft: 100,
            wonk: 1,
          }),
        },
      ],
      body: [
        'var(--serif), serif',
        {
          fontVariationSettings: fontVariationSettingsHelper({
            weight: 300,
            soft: 100,
            wonk: 1,
          }),
        },
      ],
    },
    extend: {
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        'forest-green': 'var(--forest-green)',
        dim: 'var(--dim)',
        body: 'var(--body)',
      },
    },
  },
  plugins: [],
} satisfies Config;
