import { themeParser } from 'jutop';
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
  sansSerifFont: activeFonts.spaceGrotesk.style.fontFamily,
  serifFont: activeFonts.fraunces.style.fontFamily,
  fontBase: 13,
  fontRatio: 1.1,
  color: {
    primary: '#439345',
    paragraph: '#454545',
    dim: '#666',
    title: '#303030',
  },
};

export const theme = themeParser.replaceThemeValueToCSSVar(rawTheme);
export type ThemeProps = typeof theme;
