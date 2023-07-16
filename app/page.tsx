'use client';

import { globalStyles } from './styles/global-styles';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const Box = styled.div({
  color: 'paleturquoise',
  display: 'inline-block',
  fontSize: 256,
});

export default function Home() {
  return (
    <main>
      <Global styles={globalStyles} />
      <Box>The quick brown fox jumps over the lazy dog</Box>
    </main>
  );
}
