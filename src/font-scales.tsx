import styled from "styled-components";

export interface TextSizes {
  size?: "small" | "long";
}

export const Display = styled.h1`
  font-weight: 600;
  font-size: 95px;
  letter-spacing: -1.5px;
`;
export const Headline = styled.h2`
  font-weight: 400;
  font-size: 48px;
  letter-spacing: 0px;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0px;
`;
const Subhead = styled.h4`
  font-size: 16px;
  letter-spacing: 0.15px;
  font-weight: 400;
`;
const Body = styled.p<TextSizes>`
  font-family: ${(props) => props.theme.body};
  font-size: 16px;
  letter-spacing: 0.5px;
  margin: 0;
  line-height: 1.5;

  ${({ size }) => {
    let max, min;
    if (size === "small") {
      [max, min] = [400, 100];
    } else if (size === "long") {
      [max, min] = [800, 200];
    } else {
      [max, min] = [600, 150];
    }
    return `
      max-width: ${max}px;
      min-width: ${min}px;
    `;
  }}
`;
export const Caption = styled.p`
  font-family: ${(props) => props.theme.body};
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.4px;
  display: block;
  text-align: left;
`;
export const Overline = styled.p`
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 10px;
  font-family: ${(props) => props.theme.body};
  margin: 0;
`;
export const Button = styled.button`
  font-family: ${(props) => props.theme.body};
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  border: none;
  background-color: initial;
  padding: 0;
  cursor: pointer;
  display: block;
  text-align: left;
`;

export const Subhead1 = styled(Subhead)``;
export const Subhead2 = styled(Subhead)`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1px;
`;
export const Body1 = styled(Body)``;
export const Body2 = styled(Body)`
  font-size: 14px;
  letter-spacing: 0.25px;
`;
