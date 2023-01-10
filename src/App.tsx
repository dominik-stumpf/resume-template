import { data } from "./resume-data";
import styled, { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { Display } from "./FontScales";
import { GlobalStyle } from "./GlobalStyle";
import { globalTheme } from "./GlobalTheme";
import Contacts from "./Contacts";
import { ListTitle } from "./ArticleTools";
import NonTechnical from "./NonTechnical";
import Technical from "./Technical";

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
