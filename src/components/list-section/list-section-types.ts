import { ReactNode } from 'react';

export interface ListSectionProps {
  children: {
    title: ReactNode;
    paragraph: ReactNode;
  };
  date?: { value: Date; isPresent: boolean };
}