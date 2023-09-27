import { ListSectionProps } from '../components/list-section/list-section-types';
import { ReactNode } from 'react';

interface DataProps {
  experiences: ListSectionProps[];
  skills: ListSectionProps[];
  interests: ReactNode;
  projects: string[];
}

export const resumeData: DataProps = {
  experiences: [
    {
      children: {
        title: 'WebGL, Three.js',
        paragraph:
          'Started learning the OpenGL shading language and 3D graphics for the web.',
      },
      date: [new Date(2023, 3, 14)],
    },
    {
      children: {
        title: 'React, Typescript',
        paragraph: (
          <>
            These tools taught me type safety and along with Next.js introduced
            me to the <em>component-based design</em> world.
          </>
        ),
      },
      date: [new Date(2021, 5)],
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
      date: [new Date(2023, 3, 14)],
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
      date: [new Date(2021, 2), new Date(2021, 5)],
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
      date: [new Date(2020, 11), new Date(2021, 2)],
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
      date: [new Date(2017, 9), new Date(2020, 2)],
    },
  ],
  skills: [
    {
      children: {
        title: 'Programming Languages & Relations',
        paragraph: <>HTML, CSS, SCSS, Javascript, Typescript, C#, Python</>,
      },
    },
    {
      children: {
        title: 'Libraries',
        paragraph: <>HTML, CSS, SCSS, Javascript, Typescript, C#, Python</>,
      },
    },
    {
      children: {
        title: 'Design & Software',
        paragraph: <>Figma, Inkscape, Blender</>,
      },
    },
    {
      children: {
        title: 'Tools & Platforms',
        paragraph: (
          <>
            Git, Node, VSCode, Linux, Neovim, rome.tools, eslint/prettier,
            Chrome DevTools, Markdown
          </>
        ),
      },
    },
  ],
  interests: (
    <>
      Math, computer graphics, calisthenics, Rustlang, typography, software
      development and other bits and bobs :)
    </>
  ),
  projects: ['astral-playland', 'chot'],
};
