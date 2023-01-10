import styled from "styled-components";
export interface HorizontalRuleOnSteroidsProps {
  children?: React.ReactNode;
  childrenPadding?: number;
  left?: boolean;
  right?: boolean;
  width?: string;
}

const _HorizontalRule = styled.div`
  background-color: ${(props) => props.theme.fadeColor};
  height: 1px;
  width: 100%;
  margin: 8px 0;
`;

const PartialRule = styled.div<{ width: string }>`
  background-color: ${(props) => props.theme.fadeColor};
  width: ${(props) => props.width};
  height: 1px;
`;
const BlockContainer = styled.div<{ padding: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.padding}px;
`;
export default function HorizontalRule({
  width = "20px",
  left = true,
  right = true,
  childrenPadding = 8,
  children,
}: HorizontalRuleOnSteroidsProps) {
  if (children == null) return <_HorizontalRule />;
  return (
    <BlockContainer padding={childrenPadding as number}>
      {left && <PartialRule width={width as string} />}
      {children}
      {right && <PartialRule width={width as string} />}
    </BlockContainer>
  );
}
