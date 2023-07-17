import { rawTheme } from './theme';
import { css } from '@emotion/react';
import { themeParser } from 'jutop';

export const globalStyles = css({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    textSizeAdjust: '100%',
    textRendering: 'optimizeLegibility',
  },
  ':root': {
    ...themeParser.parseObjToCSSVariables(rawTheme),
  },
});
