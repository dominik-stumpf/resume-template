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

export default function Home() {
  return (
    <main>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Box>brown fox</Box>
      </ThemeProvider>
    </main>
  );
}
