import { fontVariationSettingsHelper } from './font-variation-settings-helper';
import { rawTheme } from './theme';
import { css } from '@emotion/react';
import { themeParser } from 'jutop';

const theme = themeParser.replaceThemeValueToCSSVar(rawTheme);

export const globalStyles = css({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  ':root': {
    ...themeParser.parseObjToCSSVariables(rawTheme),
  },
  body: {
    fontSize: `calc(${theme.fontBase} * 1px)`,
    fontFamily: theme.sansSerifFont,
    '@media not print': {
      padding: 32,
    },
    maxWidth: 900,
    margin: '0 auto',
  },
  'h1, h2, h3': {
    fontFamily: theme.serifFont,
    textTransform: 'capitalize',
    lineHeight: 1.2,
  },
  h1: {
    fontSize: `calc(${theme.fontBase} * (${theme.fontRatio} * 4px))`,
    color: theme.color.primary,
    letterSpacing: -1.0,
    fontVariationSettings: fontVariationSettingsHelper({
      opticalSizing: 64,
      weight: 600,
      soft: 100,
      wonk: 1,
    }),
  },
  h2: {
    fontSize: `calc(${theme.fontBase} * (${theme.fontRatio} * 2px))`,
    color: theme.color.primary,
    margin: '16px 0 8px',
    letterSpacing: -1.0,
    fontVariationSettings: fontVariationSettingsHelper({
      opticalSizing: 32,
      weight: 500,
      soft: 100,
      wonk: 1,
    }),
  },
  h3: {
    fontSize: `calc(${theme.fontBase} * (${theme.fontRatio} * 1px))`,
    color: theme.color.title,
    textTransform: 'none',
    margin: '16px 0 8px',
    letterSpacing: -0.5,
    fontVariationSettings: fontVariationSettingsHelper({
      opticalSizing: 32,
      weight: 450,
      soft: 100,
      wonk: 1,
    }),
  },
  p: {
    fontSize: `calc(${theme.fontBase} * 1px)`,
    fontFamily: theme.sansSerifFont,
    lineHeight: 1.5,
    color: theme.color.paragraph,
    maxWidth: 380,
  },
  blockquote: {
    padding: '8px 16px',
    borderLeft: `2px solid ${theme.color.primary}`,
  },
  ul: {
    paddingLeft: 18,
    color: theme.color.paragraph,
    lineHeight: 1.5,
  }
});
