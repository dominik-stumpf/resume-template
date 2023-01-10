import { Subhead1, Body2, Subhead2 } from "./FontScales";
import { PersonalTraitType } from "./resume-data-type";
import { capitalize } from "./Utils";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Description = styled(Body2)`
  margin-top: 4px;
`;
const Container = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export default function PersonalTraits(props: PersonalTraitType) {
  return (
    <Container>
      {Object.entries(props).map((keyValue) => {
        const [key, value] = keyValue;
        return (
          <div key={uuidv4()}>
            <Subhead2>{capitalize(key)}:</Subhead2>
            <Description size="small">{value}</Description>
          </div>
        );
      })}
    </Container>
  );
}
