'use client';

import { Body } from '../body';
import { ContactProps } from './contact-types';
import { Icon } from '@iconify/react';

const contacts: ContactProps[] = [
  {
    icon: 'material-symbols:web',
    href: 'dominikstumpf.com',
  },
  {
    icon: 'material-symbols:alternate-email-rounded',
    href: 's.dominik.work@gmail.com',
  },
  {
    icon: 'cib:github',
    href: 'github.com/dominik-stumpf',
  },
  {
    icon: 'cib:linkedin-in',
    href: 'linkedin.com/in/dominik-stumpf',
  },
];

export function Contact() {
  return (
    <address className='absolute flex gap-4 not-italic rotate-90 translate-x-1/2 -translate-y-1/2 right-3 top-1/2 whitespace-nowrap'>
      {contacts.map((contact) => (
        <div key={contact.href} className='flex items-center gap-2'>
          <Icon icon={contact.icon} className='w-3' />
          <Body>{contact.href}</Body>
        </div>
      ))}
    </address>
  );
}
