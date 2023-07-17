import styled from '@emotion/styled';

export const Heading1 = styled.h1(({ theme }) => ({
  fontSize: 54,
  color: theme.color.primary,
  fontFamily: theme.serifFont,
}));

export const Heading2 = styled.h2(({ theme }) => ({
  fontSize: 36,
  color: theme.color.primary,
  fontFamily: theme.serifFont,
}));

export const Heading3 = styled.h2(({ theme }) => ({
  fontSize: 24,
  color: theme.color.primary,
  fontFamily: theme.serifFont,
}));

export const Paragraph = styled.p(({ theme }) => ({
  fontSize: 16,
  fontFamily: theme.sansSerifFont,
}));

export const Text = styled.div(({ theme }) => ({
  fontSize: 16,
  fontFamily: theme.sansSerifFont,
}));
