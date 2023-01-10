import React from "react";
import { v4 } from "uuid";
import { Article } from "./article-tools";
import { EducationType } from "./resume-data-type";

export default function Education(props: EducationType) {
  return (
    <Article
      overline={props.location}
      title={props.institution}
      titleLabel={props.time}
      body={props.description}
    />
  );
}
