import styled from "styled-components";
import {
  Body1,
  Body2,
  Headline,
  Overline,
  Subhead1,
  Subhead2,
  Title,
} from "./FontScales";
import { v4 as uuidv4 } from "uuid";
import {
  Category,
  ListTitle,
  Article,
  ArticleBox,
  CategoryHeadline,
} from "./ArticleTools";
import { nonTechnicalType } from "./resume-data-type";
import PersonalTraits from "./PersonalTraits";
import Education from "./Education";

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
          <Body2>{sectionData.biography}</Body2>
        </Category>
      )}
    </>
  );
}
