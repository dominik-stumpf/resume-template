'use client';

import { Aside } from '../components/aside';
import { Experiences } from '../components/experiences';
import { Header } from '../components/header';
import { globalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

const MainBox = styled.main({
  display: 'grid',
  marginTop: 16,
  gridTemplateColumns: '1fr 1fr',
  gridGap: 64,
});

export default function Home() {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Header />
        <MainBox>
          <Experiences />
          <Aside />
        </MainBox>
      </ThemeProvider>
    </>
  );
}
