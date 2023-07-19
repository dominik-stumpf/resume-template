import { Icon } from '@iconify-icon/react';

export function Header() {
  return (
    <header>
      <h1>Dominik Stumpf</h1>
      <div>front-end software engineer</div>
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
