import { replaceThemeValueToCSSVar } from './theme-helpers';
import { Fraunces, Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  style: ['normal'],
  weight: 'variable',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
});

const activeFonts = { spaceGrotesk, fraunces } as const;

export const rawTheme = {
  color: {
    primary: 'red',
  },
  sansSerifFont: activeFonts.spaceGrotesk.style.fontFamily,
  serifFont: activeFonts.fraunces.style.fontFamily,
};

export const theme = replaceThemeValueToCSSVar(rawTheme);
export type ThemeProps = typeof theme;
