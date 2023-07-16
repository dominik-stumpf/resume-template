export type ExperienceType = {
  occupier: string;
  role: string;
  location: string;
  time: string;
  description: string;
};

export type ContactType = {
  name: string;
  contact: string;
};

export type SkillType = {
  title: string;
  list: string;
};

export type EducationType = {
  institution: string;
  location: string;
  time: string;
  description: string;
};
export type AwardType = {
  name: string;
  event: string;
  time: string;
  description: string;
};
export type PersonalTraitType = {
  strengths?: string;
  weaknesses?: string;
  interests: string;
};

export type nonTechnicalType = {
  biography?: string;
  education?: EducationType[];
  awards?: AwardType[];
  personalTraits: PersonalTraitType;
};

export type TechnicalType = {
  name: string;
  experiences: ExperienceType[];
  skills: SkillType[];
};

export interface ResumeDataStruct {
  name: string;
  technical: TechnicalType[];
  nonTechnical: nonTechnicalType;
  contact: ContactType[];
  showCredit: boolean;
}
