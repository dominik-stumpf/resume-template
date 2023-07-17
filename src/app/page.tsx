'use client';

import { Heading1, Text } from '../styles/fonts';
import { globalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { Global, ThemeProvider } from '@emotion/react';

export default function Home() {
  return (
    <main>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Heading1>Dominik Tesco</Heading1>
        <Text>front-end software engineer</Text>
      </ThemeProvider>
    </main>
  );
}
