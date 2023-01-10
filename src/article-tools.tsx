import styled from "styled-components";
import { v4 } from "uuid";
import {
  Overline,
  Title,
  Subhead1,
  Subhead2,
  Body2,
  TextSizes,
  Headline,
} from "./font-scales";
import HorizontalRule from "./horizontal-rule";

interface LocationDateTitleProps {
  location: string;
  title: string;
  date: string;
}

const DateText = styled(Subhead1)`
  white-space: nowrap;
  color: ${({ theme }) => theme.grayText};
`;

function LocationDateTitle(props: LocationDateTitleProps) {
  return (
    <>
      <Overline>{props.location}</Overline>
      <TitleContainer>
        <Title>{props.title}</Title>
        <span>|</span>
        <DateText>{props.date}</DateText>
      </TitleContainer>
    </>
  );
}

interface DateTitleProps {
  date: string;
  title: string;
}

function DateTitle(props: DateTitleProps) {
  return (
    <TitleContainer>
      <Title>{props.title}</Title>
      <span>|</span>
      <DateText>{props.date}</DateText>
    </TitleContainer>
  );
}

interface Article extends TextSizes {
  overline?: string;
  title: string;
  titleLabel: string;
  subhead?: string;
  body: string;
}
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const _ListTitle = styled(Title)`
  margin: 24px 0;
  white-space: nowrap;
`;

export function ListTitle(props: { children: string }) {
  return (
    <HorizontalRule left={true} width={"100%"}>
      <_ListTitle>{props.children}</_ListTitle>
    </HorizontalRule>
  );
}

export const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: auto;
  max-width: 600px;
  min-width: 200px;
`;

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Description = styled(Body2)`
  margin-top: 8px;
`;

export function Article(props: Article) {
  const MainTitle = () => {
    return props.overline ? (
      <LocationDateTitle
        location={props.overline}
        title={props.title}
        date={props.titleLabel}
      />
    ) : (
      <DateTitle date={props.titleLabel} title={props.title} />
    );
  };

  const Subhead = () => {
    return props.subhead ? <Subhead2>{props.subhead}</Subhead2> : null;
  };

  return (
    <ArticleContainer key={v4()}>
      <MainTitle />
      <Subhead />
      <Description size={props.size}>{props.body}</Description>
    </ArticleContainer>
  );
}

export const Category = styled.div`
  page-break-inside: avoid;
`;

export const CategoryHeadline = styled(Headline)`
  margin: 24px 0 12px 0;
`;
