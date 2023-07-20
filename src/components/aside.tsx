import styled from '@emotion/styled';

const SkillArticle = styled.article({
  h3: {
    textTransform: 'capitalize',
  },
});

export function Aside() {
  return (
    <aside>
      <SkillArticle>
        <h2>skills & knowledge</h2>
        <section>
          <h3>programming languages & relations</h3>
          <p>HTML, CSS, SCSS, Javascript, Typescript, C#, Python</p>
        </section>
        <section>
          <h3>libraries</h3>
          <p>
            React, styled-components, Emotion (CSS in JS), Three.js,
            react-spring, Socket.IO
          </p>
        </section>
        <section>
          <h3>design & software</h3>
          <p>Figma, Gimp, Blender</p>
        </section>
        <section>
          <h3>tools & platforms</h3>
          <p>
            Git, Next.js, Node, VSCode, Linux, Neovim, rome.tools,
            eslint/prettier, Chrome DevTools
          </p>
        </section>
      </SkillArticle>
      <section>
        <h2>interests</h2>
        <p>
          Math, computer graphics, calisthenics, typography, software
          development and other bits and bobs :)
        </p>
      </section>
      <article>
        <h2>projects</h2>
        <section>
          <h3>Portfolio</h3>
          <p>
            An interactive website displaying my journey and passion using the
            tools of programming.
          </p>
        </section>
        <section>
          <h3>jutop</h3>
          <p>
            An Emotion extension for making a CSS compatible object out of the
            regular theme object Emotion provides.
          </p>
        </section>
        <section>
          <h3>resume template</h3>
          <p>
            An interactive website displaying my journey and passion using the
            tools of programming.
          </p>
        </section>
        <blockquote>
          <strong>NOTE</strong>
          <p>
            Some of my projects are still in development, and I plan to make
            them open-source in the future.
          </p>
        </blockquote>
      </article>
    </aside>
  );
}
