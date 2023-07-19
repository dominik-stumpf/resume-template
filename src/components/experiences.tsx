import { ArticleTitleDate } from './article-tools/article-tools';

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
        <p>
          Started learning the GLSL shader language and 3D graphics using
          fragment and vertex shaders.
        </p>
      </section>
      <section>
        <ArticleTitleDate
          title='React, Typescript'
          dateRange={new Date(2021, 5)}
          isPresent={true}
        />
        <p>
          The first front-end framework I started learning is react, along with
          typescript. Projects have been created with them, like my portfolio.
        </p>
      </section>
      <section>
        <ArticleTitleDate
          title='Node.js'
          dateRange={new Date(2021, 5)}
          isPresent={true}
        />
        <p>
          By reading the official Node.js guide, I’ve got an understanding of
          how the runtime works, explored its APIs as well as various front-end
          and back-end frameworks via npm.
        </p>
      </section>
      <section>
        <ArticleTitleDate
          title='Epam Systems, Inc.'
          dateRange={[new Date(2021, 2), new Date(2021, 5)]}
        />
        <p>
          Started learning the GLSL shader language and 3D graphics using
          fragment and vertex shaders.
        </p>
      </section>
      <section>
        <ArticleTitleDate
          title='HTML, CSS, JS'
          dateRange={[new Date(2020, 11), new Date(2021, 2)]}
        />
        <p>
          Independently started learning the basic tools of the web in order to
          make simple sites for the internet.
        </p>
      </section>
      <section>
        <ArticleTitleDate
          title='Python'
          dateRange={[new Date(2017, 9), new Date(2020, 2)]}
        />
        <p>
          First programming experience where I learned the basics of how a
          computer works and through the python ecosystem I got motivated to
          start making my own projects.
        </p>
      </section>
    </article>
  );
}
