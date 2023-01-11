import { data } from "../data/resume-data";
import styled, { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { Display } from "./font-scales";
import { GlobalStyle } from "./global-style";
import { globalTheme } from "./global-theme";
import Contacts from "./contacts";
import { ListTitle } from "./article-tools";
import NonTechnical from "./non-technical";
import Technical from "./technical";

const Root = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
`;
const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`;
const Section = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 360px;
  page-break-inside: avoid;
`;

function App() {
  useEffect(() => {
    document.title = `${data.name} | Resume`;
  }, []);
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyle />
      <Root>
        <header>
          <Display>{data.name}</Display>
        </header>
        <MainContainer>
          <Section>
            <Technical sectionData={data.technical} />
          </Section>
          <Section>
            <NonTechnical sectionData={data.nonTechnical} />
          </Section>
        </MainContainer>
        <footer>
          <ListTitle>Contacts</ListTitle>
          <Contacts contact={data.contact} />
        </footer>
      </Root>
    </ThemeProvider>
  );
}

export default App;
