import { ThemeProps } from '@/app/styles/theme';
import '@emotion/core';
import '@emotion/react';
import '@emotion/styled';

declare module '@emotion/react' {
  // rome-ignore lint/suspicious/noEmptyInterface: <explanation>
  export interface Theme extends ThemeProps {}
}
