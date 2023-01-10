import styled from "styled-components";
import {
  Display,
  Headline,
  Title,
  Subhead2,
  Subhead1,
  Body2,
  Body1,
  Caption,
  Overline,
  Button,
} from "./FontScales";

const FontScaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function FontScaleTest() {
  return (
    <FontScaleContainer>
      <Display>Display</Display>
      <Headline>Headline</Headline>
      <Title>Title</Title>
      <Subhead2>Subhead2</Subhead2>
      <Subhead1>Subhead1</Subhead1>
      <Body2>Body2</Body2>
      <Body1>Body1</Body1>
      <Caption>Caption</Caption>
      <Overline>Overline</Overline>
      <Button>Button</Button>
    </FontScaleContainer>
  );
}

export default FontScaleTest;
