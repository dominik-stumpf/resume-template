import { ReactNode } from 'react';

export function Title({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xs font-normal tracking-tight text-black font-title">
      {children}
    </h3>
  );
}
