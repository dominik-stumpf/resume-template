'use client';

import { Icon } from '@iconify/react';
import { Body } from '../body';
import { ContactProps } from './contact-types';

const contacts: ContactProps[] = [
  {
    icon: 'material-symbols:web',
    href: 'https://dominikstumpf.com',
    title: 'dominikstumpf.com',
  },
  {
    icon: 'material-symbols:alternate-email-rounded',
    href: 'mailto:s.dominik.work@gmail.com',
    title: 's.dominik.work@gmail.com',
  },
  {
    icon: 'cib:github',
    href: 'https://github.com/dominik-stumpf',
    title: 'github.com/dominik-stumpf',
  },
  {
    icon: 'cib:linkedin-in',
    href: 'https://linkedin.com/in/dominik-stumpf',
    title: 'linkedin.com/in/dominik-stumpf',
  },
];

export function Contact() {
  return (
    <address className="fixed flex items-center justify-center gap-4 not-italic rotate-90 translate-x-1/2 -translate-y-1/2 right-3 top-1/2 w-max">
      {contacts.map((contact) => (
        <div key={contact.href} className="flex items-center gap-2">
          <Icon icon={contact.icon} className="w-3" />
          <a href={contact.href} target="_blank" rel="noopener noreferrer">
            <Body>{contact.title}</Body>
          </a>
        </div>
      ))}
    </address>
  );
}
