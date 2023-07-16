import { css } from '@emotion/react';

export const globalStyles = css({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    textSizeAdjust: '100%',
    textRendering: 'optimizeLegibility',
    fontFeatureSettings: '"rlig" 1,"calt" 0',
  },
  body: {
    backgroundColor: 'black',
    color: 'white',
  },
});
