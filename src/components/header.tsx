import styled from '@emotion/styled';
import { Icon } from '@iconify-icon/react';

const Subheader = styled.div(({ theme }) => ({
  fontSize: `calc(${theme.fontBase} * (${theme.fontRatio} * 2px))`,
  fontWeight: 100,
}));

export function Header() {
  return (
    <header>
      <h1>Dominik Stumpf</h1>
      <Subheader>front-end software engineer</Subheader>
      <ul>
        <li>
          <Icon icon={'material-symbols:web'} />
          dominikstumpf.com
        </li>
        <li>
          <Icon icon={'material-symbols:alternate-email-rounded'} />
          s.dominik.stumpf@gmail.com
        </li>
        <li>
          <Icon icon={'cib:github'} />
          github.com/dominik-stumpf
        </li>
        <li>
          <Icon icon={'cib:codewars'} />
          codewars.com/users/sdomi
        </li>
      </ul>
    </header>
  );
}
