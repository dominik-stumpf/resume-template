import { ReactNode } from 'react';

export interface ListSectionProps {
  children: {
    title: ReactNode;
    paragraph: ReactNode;
  };
  date?: [Date, Date] | [Date];
  tight?: boolean;
  underline?: boolean;
}
