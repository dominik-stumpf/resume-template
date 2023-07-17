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
  color: {
    primary: '#65C045',
    paragraph: '#525252',
    separator: '#777',
    title: '#333',
  },
};

export const theme = themeParser.replaceThemeValueToCSSVar(rawTheme);
export type ThemeProps = typeof theme;
