import { Body } from '../components/body';
import { Header } from '../components/header';
import { ListSection } from '../components/list-section/list-section';
import { ListSectionProps } from '../components/list-section/list-section-types';
import Projects from '../components/projects/projects';
import { resumeData } from './resume-data';

export default function Page() {
  return (
    <div className='grid h-full'>
      <div className='w-[210mm] h-[297mm] relative bg-white outline outline-dim place-self-center font-soft-serif px-6 py-8'>
        <div className='inline-flex flex-col items-start justify-start mb-5 tracking-tighter'>
          <h1 className='mb-1 text-5xl font-bold text-forest-green'>
            Dominik Stumpf
          </h1>
          <div className='text-2xl font-thin text-black capitalize'>
            software engineer & talented individual
          </div>
        </div>
        <div className='grid grid-cols-[1fr,0.9fr] gap-8'>
          <div className='flex flex-col gap-2'>
            <Header>Experiences</Header>
            <div className='pl-1.5 flex-col justify-start items-start flex'>
              {resumeData.experiences.map(({ children, date }) => (
                <ListSection date={date}>{children}</ListSection>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Header>Skills & Knowledge</Header>
            <div className='pl-1.5'>
              {resumeData.skills.map(({ children }) => (
                <ListSection tight>{children}</ListSection>
              ))}
            </div>
            <Header>Interests</Header>
            <div className='pl-1.5'>
              <Body>{resumeData.interests}</Body>
            </div>
            <Header>Projects</Header>
            <div className='pl-1.5'>
              <Projects />
              <div className='flex flex-col justify-center pl-2 mt-2 border-l-2 border-green-600'>
                <Body>See them on my GitHub!</Body>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
