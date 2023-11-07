import { ListSectionProps } from '@/src/components/list-section/list-section-types';
import { ReactNode } from 'react';

interface ResumeDataProps {
  experiences: ListSectionProps[];
  skills: ListSectionProps[];
  interests: ReactNode;
  projects: string[];
}

export const resumeData: ResumeDataProps = {
  experiences: [
    {
      children: {
        title: 'WebGL, Three.js',
        paragraph:
          'Started learning the OpenGL shading language and 3D graphics.',
      },
      dateRange: [new Date(2023, 3, 14)],
    },
    {
      children: {
        title: 'React, Typescript, Next.js',
        paragraph: (
          <>
            With these tools at hand I mostly started making simple, but
            scalable full-stack apps.
          </>
        ),
      },
      dateRange: [new Date(2021, 5)],
    },
    {
      children: {
        title: 'Node.js',
        paragraph: (
          <>
            By reading the <i>official Node.js guide</i>, I’ve got an
            understanding of how the runtime works, explored its APIs as well as
            various front-end and back-end frameworks via npm.
          </>
        ),
      },
      dateRange: [new Date(2021, 5)],
    },
    {
      children: {
        title: 'Epam Systems, Inc.',
        paragraph: (
          <>
            Participated in EPAM Szeged's first Front-end recruit program and{' '}
            <em>acquired the groundwork</em> needed in the web development
            business.
          </>
        ),
      },
      dateRange: [new Date(2021, 2), new Date(2021, 5)],
    },
    {
      children: {
        title: 'HTML, CSS, JS',
        paragraph: (
          <>
            I started learning the basic tools of the web in order to make
            simple sites for the internet.
          </>
        ),
      },
      dateRange: [new Date(2020, 11), new Date(2021, 2)],
    },
    {
      children: {
        title: 'Python',
        paragraph: (
          <>
            First programming experience where I learned the basics of how a
            computer works and through the python ecosystem I got motivated to
            start making my own projects.
          </>
        ),
      },
      dateRange: [new Date(2017, 9), new Date(2020, 2)],
    },
  ],
  skills: [
    {
      children: {
        title: 'Programming Languages & Relations',
        paragraph: <>HTML, CSS, Javascript, Typescript, C#, Python, Markdown</>,
      },
    },
    {
      children: {
        title: 'Libraries',
        paragraph: (
          <>React, Three.js, react-spring, Socket.IO, tailwindcss, Next.js...</>
        ),
      },
    },
    {
      children: {
        title: 'Design & Software',
        paragraph: <>Figma</>,
      },
    },
    {
      children: {
        title: 'Tools & Platforms',
        paragraph: (
          <>
            Git, Node, VSCode, Linux, Neovim, eslint/prettier, Chrome DevTools,
            Supabase
          </>
        ),
      },
    },
  ],
  interests: (
    <>
      Math, computer graphics, calisthenics, <i>Rust</i>, typography and other
      bits and bobs&nbsp;:)
    </>
  ),
  projects: ['post-paper', 'chot', 'astral-playland'],
};
