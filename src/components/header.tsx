import styled from '@emotion/styled';
import { Icon } from '@iconify-icon/react';

const Subheader = styled.div(({ theme }) => ({
  fontSize: `calc(${theme.fontBase} * (${theme.fontRatio} * 2px))`,
  fontWeight: 200,
  letterSpacing: -0.32,
  textTransform: 'capitalize',
}));

const Box = styled.header({
  display: 'flex',
  gap: 16,
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ContactList = styled.ul(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: 16,
}));
const ContactItem = styled.li(({ theme }) => ({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  fontSize: `calc(${theme.fontBase} * (${theme.fontRatio} * 1px))`,
  ':before': { display: 'none' },
}));

export function Header() {
  return (
    <Box>
      <div>
        <h1>Dominik Stumpf</h1>
        <Subheader>front-end software engineer</Subheader>
      </div>
      <ContactList>
        <ContactItem>
          <Icon icon={'material-symbols:web'} />
          dominikstumpf.com
        </ContactItem>
        <ContactItem>
          <Icon icon={'material-symbols:alternate-email-rounded'} />
          s.dominik.work@gmail.com
        </ContactItem>
        <ContactItem>
          <Icon icon={'cib:github'} />
          github.com/dominik-stumpf
        </ContactItem>
        <ContactItem>
          <Icon icon={'cib:codewars'} />
          codewars.com/users/sdomi
        </ContactItem>
      </ContactList>
    </Box>
  );
}
