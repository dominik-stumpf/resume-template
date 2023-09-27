import { ReactNode } from 'react';

export function Body({
  children,
  isParagraph = true,
}: { children: ReactNode; isParagraph?: boolean }) {
  return (
    <p className='text-xs font-light leading-snug text-body font-body'>
      {children}
    </p>
  );
}
