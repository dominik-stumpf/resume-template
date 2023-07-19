'use client';

import { Aside } from '../components/aside';
import { Experiences } from '../components/experiences';
import { Header } from '../components/header';
import { globalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { Global, ThemeProvider } from '@emotion/react';

export default function Home() {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Experiences />
          <Aside />
        </main>
      </ThemeProvider>
    </>
  );
}
