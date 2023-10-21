import type { Metadata } from 'next';
import './global.css';
export const metadata: Metadata = {
  title: 'resume-template',
  description: 'resume template',
};

import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--serif',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} bg-white`}>{children}</body>
    </html>
  );
}
