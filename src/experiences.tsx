import { v4 as uuidv4 } from "uuid";
import { Article, ArticleBox } from "./article-tools";
import { ExperienceType } from "../data/resume-data-type";

function Experiences(props: { experiences: ExperienceType[] }) {
  return (
    <ArticleBox>
      {props.experiences.map((experience) => (
        <Article
          key={uuidv4()}
          overline={experience.location}
          title={experience.occupier}
          titleLabel={experience.time}
          subhead={experience.role}
          body={experience.description}
        />
      ))}
    </ArticleBox>
  );
}

export default Experiences;
