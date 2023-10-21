import { ReactNode } from 'react';

export function Body({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-light leading-snug text-body font-body">
      {children}
    </p>
  );
}
