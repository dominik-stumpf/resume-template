import { v4 } from "uuid";
import { Category, CategoryHeadline, ListTitle } from "./article-tools";
import Experiences from "./experiences";
import { TechnicalType } from "./resume-data-type";
import Skills from "./skills";

export default function Technical({
  sectionData,
}: {
  sectionData: TechnicalType[];
}) {
  return (
    <>
      {sectionData.map((section) => (
        <div key={v4()}>
          <CategoryHeadline>{section.name}</CategoryHeadline>
          <Category>
            <ListTitle>Skills</ListTitle>
            <Skills skills={section.skills} />
          </Category>
          <Category>
            <ListTitle>Experiences</ListTitle>
            <Experiences experiences={section.experiences} />
          </Category>
        </div>
      ))}
    </>
  );
}
