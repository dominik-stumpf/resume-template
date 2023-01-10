import React from "react";
import styled from "styled-components";
import {
  Body1,
  Body2,
  Caption,
  Subhead1,
  Subhead2,
  Title,
} from "./font-scales";
import { v4 as uuidv4 } from "uuid";
import { SkillType } from "./resume-data-type";

const Container = styled.ul`
  margin: 0;
  padding-left: 24px;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const SkillText = styled(Body2)`
  display: inline;
`;

const SkillTitle = styled(Subhead1)`
  display: inline;
  margin-right: 4px;
`;

export default function Skills({ skills }: { skills: SkillType[] }) {
  return (
    <Container>
      {skills.map((skill) => {
        return (
          <li key={uuidv4()}>
            <SkillTitle>{skill.title}:</SkillTitle>
            <SkillText>{skill.list}</SkillText>
          </li>
        );
      })}
    </Container>
  );
}
