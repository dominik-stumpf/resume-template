import { ReactNode } from 'react';

export interface ListSectionProps {
  children: {
    title: ReactNode;
    paragraph: ReactNode;
  };
  dateRange?: [Date, Date] | [Date];
  tight?: boolean;
  underline?: boolean;
}
