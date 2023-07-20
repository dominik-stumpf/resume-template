import { ArticleTitleDate } from './article-tools/article-tools';
import { Description } from './description';
import styled from '@emotion/styled';

export function Experiences() {
  return (
    <article>
      <h2>experiences</h2>
      <section>
        <ArticleTitleDate
          title='WebGL, Three.js'
          dateRange={new Date(2023, 3, 14)}
          isPresent={true}
        />
        <Description>
          <p>
            Started learning the GLSL shader language and 3D graphics using
            fragment and vertex shaders.
          </p>
        </Description>
      </section>
      <section>
        <ArticleTitleDate
          title='React, Typescript'
          dateRange={new Date(2021, 5)}
          isPresent={true}
        />
        <Description>
          <p>
            The first front-end framework I started learning is react, along
            with typescript. Projects have been created with them, like my
            portfolio.
          </p>
        </Description>
      </section>
      <section>
        <ArticleTitleDate
          title='Node.js'
          dateRange={new Date(2021, 5)}
          isPresent={true}
        />
        <Description>
          <p>
            By reading the official Node.js guide, I’ve got an understanding of
            how the runtime works, explored its APIs as well as various
            front-end and back-end frameworks via npm.
          </p>
        </Description>
      </section>
      <section>
        <ArticleTitleDate
          title='Epam Systems, Inc.'
          dateRange={[new Date(2021, 2), new Date(2021, 5)]}
        />
        <Description>
          <p>
            Participated in EPAM Szeged's first Front-end recruit program and
            acquired the groundwork needed in the web development business.
          </p>
        </Description>
      </section>
      <section>
        <ArticleTitleDate
          title='HTML, CSS, JS'
          dateRange={[new Date(2020, 11), new Date(2021, 2)]}
        />
        <Description>
          <p>
            Independently started learning the basic tools of the web in order
            to make simple sites for the internet.
          </p>
        </Description>
      </section>
      <section>
        <ArticleTitleDate
          title='Python'
          dateRange={[new Date(2017, 9), new Date(2020, 2)]}
        />
        <Description>
          <p>
            First programming experience where I learned the basics of how a
            computer works and through the python ecosystem I got motivated to
            start making my own projects.
          </p>
        </Description>
      </section>
    </article>
  );
}
