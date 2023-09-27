import { ReactNode } from 'react';

export function Body({
  children,
  isParagraph = false,
}: { children: ReactNode; isParagraph?: boolean }) {
  return (
    <div className='text-xs font-light leading-snug text-zinc-80 font-body'>
      {children}
    </div>
  );
}
