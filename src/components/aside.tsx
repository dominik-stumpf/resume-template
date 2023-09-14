import { Description } from './description';
import { Repos } from './repos';
import styled from '@emotion/styled';

const SkillArticle = styled.article({
  h3: {
    textTransform: 'capitalize',
  },
});

const Note = styled.blockquote({
  marginTop: 16,
  color: '#45454',
  marginLeft: 8,
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
              Three.js, react-spring, Socket.IO, tailwindcss, Prisma, Express,{' '}
              <strong>Next.js</strong>
            </p>
          </Description>
        </section>
        <section>
          <h3>design & software</h3>
          <Description>
            <p>Figma</p>
          </Description>
        </section>
        <section>
          <h3>tools & platforms</h3>
          <Description>
            <p>
              Git, Node, VSCode, Linux, Neovim, rome.tools, eslint/prettier,
              Chrome DevTools, Markdown
            </p>
          </Description>
        </section>
      </SkillArticle>
      <h2>Interests</h2>
      <div className='indent-left'>
        <Description>
          <p>
            Math, computer graphics, calisthenics, typography, back-end,
            front-end, game development and other bits and bobs :)
          </p>
        </Description>
      </div>
      <article>
        <h2>projects</h2>
        <section>
          <Repos />
        </section>
        <Note>See them on my Github!</Note>
      </article>
    </aside>
  );
}
