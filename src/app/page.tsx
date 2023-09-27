import { Title } from '../components/title';

export default function Page() {
  return (
    <div className='grid h-full'>
      <div className='w-[210mm] h-[297mm] relative bg-white outline outline-dim place-self-center font-soft-serif px-6 py-8'>
        <div className='inline-flex flex-col items-start justify-start mb-5'>
          <div className='text-5xl font-bold text-green-600'>
            Dominik Stumpf
          </div>
          <div className='text-2xl font-thin text-black capitalize'>
            software engineer & talented individual
          </div>
        </div>
        <div className='grid grid-cols-[1fr,0.8fr] gap-8'>
          <div className='flex flex-col gap-2'>
            <Title>Experiences</Title>
            <div className='pl-1.5 flex-col justify-start items-start flex'>
              <div className='flex flex-col items-start justify-start gap-3 py-3 border-b border-neutral-200'>
                <div className='inline-flex items-center self-stretch justify-between'>
                  <div className='text-xs font-normal text-black '>
                    WebGL, Three.js
                  </div>
                  <div className='text-black text-[10px] font-light  underline'>
                    April, 2023 - Present
                  </div>
                </div>
                <div className='w-[257px] text-zinc-800 text-xs font-light  leading-none'>
                  Started learning the OpenGL shading language and 3D graphics
                  for the web.
                </div>
              </div>
              <div className='flex flex-col items-start justify-start gap-3 py-3 border-b border-neutral-200'>
                <div className='inline-flex items-center self-stretch justify-between'>
                  <div className='text-xs font-normal text-black '>
                    React, Typescript
                  </div>
                  <div className='text-black text-[10px] font-light  underline'>
                    June, 2021 - Present
                  </div>
                </div>
                <div className='w-[257px] text-zinc-800 text-xs font-light  leading-none'>
                  These tools taught me type safety and along with Next.js
                  introduced me to the component-based design world.
                </div>
              </div>
              <div className='flex flex-col items-start justify-start gap-3 py-3 border-b border-neutral-200'>
                <div className='inline-flex items-center self-stretch justify-between'>
                  <div className='text-xs font-normal text-black '>Node.js</div>
                  <div className='text-black text-[10px] font-light  underline'>
                    June, 2021 - Present
                  </div>
                </div>
                <div className='w-[257px] text-zinc-800 text-xs font-light  leading-none'>
                  By reading the official Node.js guide, I’ve got an
                  understanding of how the runtime works, explored its APIs as
                  well as various front-end and back-end frameworks via npm.
                </div>
              </div>
              <div className='flex flex-col items-start justify-start gap-3 py-3 border-b border-neutral-200'>
                <div className='inline-flex items-center self-stretch justify-between'>
                  <div className='text-xs font-normal text-black '>
                    Epam Systems, Inc.
                  </div>
                  <div className='text-black text-[10px] font-light  underline'>
                    March - June, 2021
                  </div>
                </div>
                <div className='w-[257px] text-zinc-800 text-xs font-light  leading-none'>
                  Participated in EPAM Szeged's first Front-end recruit program
                  and acquired the groundwork needed in the web development
                  business.
                </div>
              </div>
              <div className='flex flex-col items-start justify-start gap-3 py-3 border-b border-neutral-200'>
                <div className='inline-flex items-center self-stretch justify-between'>
                  <div className='text-xs font-normal text-black '>
                    HTML, CSS, JS
                  </div>
                  <div className='text-black text-[10px] font-light  underline'>
                    December, 2020 - March, 2021
                  </div>
                </div>
                <div className='w-[257px] text-zinc-800 text-xs font-light  leading-none'>
                  I started learning the basic tools of the web in order to make
                  simple sites for the internet.
                </div>
              </div>
              <div className='flex flex-col items-start justify-start gap-3 py-3 border-b'>
                <div className='inline-flex items-center self-stretch justify-between'>
                  <div className='text-xs font-normal text-black '>Python</div>
                  <div className='text-black text-[10px] font-light  underline'>
                    October, 2017 - March, 2020
                  </div>
                </div>
                <div className='w-[257px] text-zinc-800 text-xs font-light  leading-none'>
                  First programming experience where I learned the basics of how
                  a computer works and through the python ecosystem I got
                  motivated to start making my own projects.
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <span className='text-2xl font-semibold text-green-600 capitalize'>
                Skills & Knowledge{' '}
              </span>
              <span className='text-2xl font-semibold capitalize text-zinc-800'>
                .
              </span>
            </div>
            <div className='pl-1.5 flex-col justify-start items-start flex'>
              <div className='h-[67px] py-1.5 border-b flex-col justify-start items-start gap-1.5 flex'>
                <div className='self-stretch text-xs font-normal text-black '>
                  Programming Languages & Relations
                </div>
                <div className='self-stretch text-xs font-light leading-none text-zinc-800'>
                  HTML, CSS, SCSS, Javascript, Typescript, C#, Python
                </div>
              </div>
              <div className='h-[101px] py-1.5 border-b flex-col justify-start items-start gap-1.5 flex'>
                <div className='self-stretch text-xs font-normal text-black '>
                  Libraries
                </div>
                <div className='self-stretch text-xs font-light leading-none text-zinc-800'>
                  React, styled-components, Emotion, Three.js, react-spring,
                  Socket.IO, tailwindcss, Prisma, Express, Next.js, r3f
                </div>
              </div>
              <div className='h-[50px] py-1.5 border-b flex-col justify-start items-start gap-1.5 flex'>
                <div className='self-stretch text-xs font-normal text-black '>
                  Design & Software
                </div>
                <div className='self-stretch text-xs font-light leading-none text-zinc-800'>
                  Figma, Inkscape, Blender
                </div>
              </div>
              <div className='h-[84px] py-1.5 border-b flex-col justify-start items-start gap-1.5 flex'>
                <div className='self-stretch text-xs font-normal text-black '>
                  Tools & Platforms
                </div>
                <div className='self-stretch text-xs font-light leading-none text-zinc-800'>
                  Git, Node, VSCode, Linux, Neovim, rome.tools, eslint/prettier,
                  Chrome DevTools, Markdown
                </div>
              </div>
            </div>
            <div>
              <span className='text-2xl font-semibold text-green-600 capitalize'>
                Interests{' '}
              </span>
              <span className='text-2xl font-semibold capitalize text-zinc-800'>
                .
              </span>
            </div>
            <div className='self-stretch pl-1.5 justify-start items-start gap-2.5 inline-flex'>
              <div className='text-xs font-light leading-none grow shrink basis-0 text-zinc-800'>
                Math, computer graphics, calisthenics, Rustlang, typography,
                software development and other bits and bobs :)
              </div>
            </div>
            <div>
              <span className='text-2xl font-semibold text-green-600 capitalize'>
                Projects{' '}
              </span>
              <span className='text-2xl font-semibold capitalize text-zinc-800'>
                .
              </span>
            </div>
            <div className='self-stretch h-[117px] pl-1.5 flex-col justify-start items-start flex'>
              <div className='self-stretch h-[50px] py-1.5 border-b flex-col justify-start items-start gap-1.5 flex'>
                <div className='self-stretch text-xs font-normal text-black '>
                  astral playland
                </div>
                <div className='self-stretch text-xs font-light leading-none text-zinc-800'>
                  three.js app showcasing the universe
                </div>
              </div>
              <div className='self-stretch h-[67px] py-1.5 border-b flex-col justify-start items-start gap-1.5 flex'>
                <div className='self-stretch text-xs font-normal text-black '>
                  chot
                </div>
                <div className='self-stretch text-xs font-light leading-none text-zinc-800'>
                  Minimalist themed public chat application for the web using
                  sockets.
                </div>
              </div>
            </div>
            <div className='w-56 pl-2 border-l-2 border-green-600 justify-center items-center gap-2.5 inline-flex'>
              <div className='text-xs font-light leading-none grow shrink basis-0 text-zinc-800'>
                See them on my GitHub!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
