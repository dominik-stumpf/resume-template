import { Description } from './description';
import styled from '@emotion/styled';

const SkillArticle = styled.article({
  h3: {
    textTransform: 'capitalize',
  },
});

const Note = styled.blockquote({
  marginTop: 16,
  strong: {
    display: 'inline-block',
    marginBottom: 8,
  },
});

export function Aside() {
  return (
    <aside>
      <SkillArticle>
        <h2>skills & knowledge</h2>
        <section>
          <h3>programming languages & relations</h3>
          <Description>
            <p>
              HTML, CSS, SCSS, Javascript, <strong>Typescript</strong>, C#,
              Python
            </p>
          </Description>
        </section>
        <section>
          <h3>libraries</h3>
          <Description>
            <p>
              <strong>React</strong>, styled-components, Emotion (CSS in JS),
              Three.js, react-spring, Socket.IO
            </p>
          </Description>
        </section>
        <section>
          <h3>design & software</h3>
          <Description>
            <p>Figma, Blender</p>
          </Description>
        </section>
        <section>
          <h3>tools & platforms</h3>
          <Description>
            <p>
              Git, <strong>Next.js</strong>, Node, VSCode, Linux, Neovim,
              rome.tools, eslint/prettier, Chrome DevTools
            </p>
          </Description>
        </section>
      </SkillArticle>
      <section>
        <h2>Interests</h2>
        <Description>
          <p>
            Math, computer graphics, calisthenics, typography, software
            development and other bits and bobs :)
          </p>
        </Description>
      </section>
      <article>
        <h2>projects</h2>
        {/* <section>
          <h3>portfolio</h3>
          <Description>
            <p>
              An interactive website displaying my journey and passion using the
              tools of programming.
            </p>
          </Description>
        </section> */}
        <section>
          <h3>jutop</h3>
          <Description>
            <p>
              An Emotion extension for making a CSS compatible object out of the
              regular theme object Emotion provides.
            </p>
          </Description>
        </section>
        <section>
          <h3>chot</h3>
          <Description>
            <p>Simple themed chat application for the web using sockets.</p>
          </Description>
        </section>
        {/* <section>
          <h3>resume-template</h3>
          <Description>
            <p>
              Extensible, print friendly and somewhat responsive resume
              template.
            </p>
          </Description>
        </section> */}
      </article>
    </aside>
  );
}
