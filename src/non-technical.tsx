import styled from "styled-components";
import { Body2 } from "./font-scales";
import { v4 as uuidv4, v4 } from "uuid";
import {
  Category,
  ListTitle,
  Article,
  ArticleBox,
  CategoryHeadline,
} from "./article-tools";
import { nonTechnicalType } from "../data/resume-data-type";
import PersonalTraits from "./personal-traits";
import Education from "./education";

const BioParagraphHolder = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export default function NonTechnical({
  sectionData,
}: {
  sectionData: nonTechnicalType;
}) {
  return (
    <>
      <CategoryHeadline>Non-technical information</CategoryHeadline>
      {sectionData.education && (
        <Category>
          <ListTitle>Education</ListTitle>
          <ArticleBox>
            {sectionData.education.map((education) => {
              return <Education key={uuidv4()} {...education} />;
            })}
          </ArticleBox>
        </Category>
      )}
      <Category>
        <ListTitle>Personal Traits</ListTitle>
        <PersonalTraits {...sectionData.personalTraits} />
      </Category>
      {sectionData.awards && (
        <Category>
          <ListTitle>Awards & Honors</ListTitle>
          <ArticleBox>
            {sectionData.awards.map((award) => {
              return (
                <div key={uuidv4()}>
                  <Article
                    overline={""}
                    title={award.event}
                    titleLabel={award.time}
                    subhead={award.name}
                    body={award.description}
                  />
                </div>
              );
            })}
          </ArticleBox>
        </Category>
      )}
      {sectionData.biography && (
        <Category>
          <ListTitle>Biography</ListTitle>
          <BioParagraphHolder>
            {sectionData.biography.split("\n").map((paragraph) => {
              return <Body2 key={v4()}>{paragraph}</Body2>;
            })}
          </BioParagraphHolder>
        </Category>
      )}
    </>
  );
}
