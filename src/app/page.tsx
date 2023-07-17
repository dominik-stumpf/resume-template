'use client';

import { globalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

const Box = styled.div(({ theme }) => ({
  color: theme.color.primary,
  fontFamily: theme.sansSerifFont,
  fontSize: 128,
}));

const Title = styled.div(({ theme }) => ({
  fontFamily: theme.serifFont,
  fontSize: 256,
}));

export default function Home() {
  return (
    <main>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Box>brown fox</Box>
        <Title>jumps over the lazy dog</Title>
      </ThemeProvider>
    </main>
  );
}
