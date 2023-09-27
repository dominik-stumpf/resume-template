import { ReactNode } from 'react';

export interface ListSectionProps {
  children: {
    title: ReactNode;
    paragraph: ReactNode;
  };
  date?: { value: Date | [Date, Date]; isPresent: boolean };
  tight?: boolean;
  underline?: boolean;
}
