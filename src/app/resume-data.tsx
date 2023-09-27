import { ListSectionProps } from '../components/list-section/list-section-types';

interface DataProps {
  experiences: ListSectionProps[];
}

export const resumeData: DataProps = {
  experiences: [
    {
      children: {
        title: 'WebGL, Three.js',
        paragraph:
          'Started learning the OpenGL shading language and 3D graphics for the web.',
      },
      date: { value: new Date(2023, 3, 14), isPresent: true },
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
      date: { value: new Date(2021, 5), isPresent: true },
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
      date: { value: new Date(2023, 3, 14), isPresent: true },
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
      date: { value: [new Date(2021, 2), new Date(2021, 5)], isPresent: false },
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
      date: {
        value: [new Date(2020, 11), new Date(2021, 2)],
        isPresent: false,
      },
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
      date: { value: [new Date(2017, 9), new Date(2020, 2)], isPresent: false },
    },
  ],
};
