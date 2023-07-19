import { rawTheme } from './theme';
import { css } from '@emotion/react';
import { themeParser } from 'jutop';

const theme = themeParser.replaceThemeValueToCSSVar(rawTheme);

export const globalStyles = css({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    // textSizeAdjust: '100%',
    // textRendering: 'optimizeLegibility',
  },
  ':root': {
    ...themeParser.parseObjToCSSVariables(rawTheme),
    fontSize: `calc(${theme.fontBase} * 1px)`,
    fontFamily: theme.sansSerifFont,
  },
  'h1, h2, h3': {
    fontFamily: theme.serifFont,
    textTransform: 'capitalize',
    letterSpacing: -0.4,
    margin: '16px 0',
  },
  h1: {
    fontSize: `calc(${theme.fontBase} * (${theme.fontRatio} * 3px))`,
    color: theme.color.primary,
    fontFeatureSettings: '"opsz" 64, "wght" 600, "SOFT" 100, "WONK" 1',
  },
  h2: {
    fontSize: `calc(${theme.fontBase} * (${theme.fontRatio} * 2px))`,
    color: theme.color.primary,
    fontFeatureSettings: '"opsz" 32, "wght" 500, "SOFT" 100, "WONK" 1',
  },
  h3: {
    fontSize: `calc(${theme.fontBase} * (${theme.fontRatio} * 1px))`,
    color: theme.color.title,
    textTransform: 'none',
    fontFeatureSettings: '"opsz" 32, "wght" 450, "SOFT" 100, "WONK" 1',
  },
  p: {
    fontSize: `calc(${theme.fontBase} * 1px)`,
    fontFamily: theme.sansSerifFont,
    lineHeight: 1.4,
    letterSpacing: 0.04,
    color: theme.color.paragraph,
  },
  blockquote: {
    padding: 16,
    borderLeft: `4px solid ${theme.color.primary}`,
  },
});
