import { ResumeDataStruct } from "./resume-data-type";

const data: ResumeDataStruct = {
  name: "John Doe",
  technical: [
    {
      name: "Front-end developer career",
      experiences: [
        {
          occupier: "Discord",
          role: "Software Engineer",
          location: "New York, US",
          time: "2010 - 2014",
          description:
            "The font-weight property in CSS is used to set the weight or thickness of the font. It specifies how thin or thick the characters in a text. The font-weight property is either dependent on the weights specified by the browser or the available font faces in a font family.",
        },
        {
          occupier: "Twitter",
          role: "Quality Assurance",
          location: "Paris, France",
          time: "2017 - 2019",
          description:
            "The type scale is a combination of thirteen styles that are supported by the type system. It contains reusable categories of text, each with an intended application and meaning.",
        },
      ],
      skills: [
        {
          title: "Programming languages",
          list: "HTML, CSS, SCSS, Javascript, Typescript",
        },
        { title: "Libraries", list: "React, Styled-components" },
        { title: "Tools & Platforms", list: "Git, Webpack" },
        { title: "Design & Software", list: "Figma" },
      ],
    },
    {
      name: "Game developer career",
      experiences: [
        {
          occupier: "Discord",
          role: "Software Engineer",
          location: "New York, US",
          time: "2010 - 2014",
          description:
            "The font-weight property in CSS is used to set the weight or thickness of the font. It specifies how thin or thick the characters in a text. The font-weight property is either dependent on the weights specified by the browser or the available font faces in a font family.",
        },
        {
          occupier: "Twitter",
          role: "Quality Assurance",
          location: "Paris, France",
          time: "2017 - 2019",
          description:
            "The type scale is a combination of thirteen styles that are supported by the type system. It contains reusable categories of text, each with an intended application and meaning.",
        },
      ],
      skills: [
        {
          title: "Programming languages",
          list: "HTML, CSS, SCSS, Javascript, Typescript",
        },
        { title: "Libraries", list: "React, Styled-components" },
        { title: "Tools & Platforms", list: "Git, Webpack" },
        { title: "Design & Software", list: "Figma" },
      ],
    },
  ],
  nonTechnical: {
    biography:
      'Although born into an Anglican family, by his thirties Newton held a Christian faith that, had it been made public, would not have been considered orthodox by mainstream Christianity,[122] with one historian labelling him a heretic.\n[123] \
      By 1672, he had started to record his theological researches in notebooks which he showed to no one and which have only recently[when?] been examined.\n They demonstrate an extensive knowledge of early Church writings and show that in the conflict between Athanasius and Arius which defined the Creed, he took the side of Arius, the loser, who rejected the conventional view of the Trinity. Newton "recognized Christ as a divine mediator between God and man, who was subordinate to the Father who created him."[124] He was especially interested in prophecy, but for him, "the great apostasy was trinitarianism."[125] \
      Newton tried unsuccessfully to obtain one of the two fellowships that exempted the holder from the ordination requirement.',
    education: [
      {
        institution: "Maplewood High School",
        location: "Hong Kong, China",
        time: "2000 - 2002",
        description:
          "This will create a horizontal line that is 1 pixel thick and solid black, running along the bottom of the div element.",
      },
      {
        institution: "Riverdale Academy",
        location: "Wuwei, China",
        time: "2004 - 2009",
        description:
          "You can find more information about the ::after and ::before pseudo-elements in the CSS Pseudo-Elements Module Level 4 specification.",
      },
    ],
    awards: [
      {
        event: "Kangaroo Math Competition",
        name: "Third place",
        time: "November, 2000",
        description:
          "To change the decoration of an unordered list in CSS, you can use the list-style-type property with a value that specifies the type of decoration you want to use.",
      },
      {
        event: "The Golden Seraph",
        name: "Second place",
        time: "September, 2011",
        description:
          "The Golden Seraph is an annual award given to individuals or organizations who have made significant contributions to the field of philanthropy.",
      },
    ],
    personalTraits: {
      strengths:
        "Quick-thinking, Determined, Creative, Intelligent, Perceptive, Intuitive, Insightful, Prudent",
      weaknesses:
        "Independent to an Extreme, Refusing to Take Responsibility, Self-Centered",
      interests: "Math, programming, horror movies, pistachio",
    },
  },
  contact: [ ],
  showCredit: false,
};

export { data };
