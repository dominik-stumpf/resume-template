import { BackgroundGraphics } from '@/src/components/background-graphics/background-graphics';
import { Body } from '@/src/components/body';
import { Contact } from '@/src/components/contact/contact';
import { Header } from '@/src/components/header';
import { ListSection } from '@/src/components/list-section/list-section';
import Projects from '@/src/components/projects/projects';
import { resumeData } from './resume-data';

export default function Page() {
  return (
    <div className="grid h-full">
      <div className="w-[210mm] h-[297mm] outline outline-dim place-self-center font-soft-serif px-6 py-8 overflow-hidden relative">
        <BackgroundGraphics />
        <Contact />
        <header className="mb-5 tracking-tighter">
          <h1 className="mb-1 text-5xl font-bold text-forest-green">
            Dominik Stumpf
          </h1>
          <div className="text-2xl font-thin text-black capitalize">
            software engineer & talented individual
          </div>
        </header>
        <div className="grid grid-cols-[1fr,0.9fr] gap-8 pr-4">
          <main className="flex flex-col gap-2">
            <Header>Experiences</Header>
            <div className="pl-1.5 flex-col justify-start items-start flex">
              {resumeData.experiences
                .sort((a, b) => {
                  const [prev, next] = [a, b].map(({ dateRange }) => {
                    if (dateRange === undefined) {
                      throw new Error('Data in experiences must have date');
                    }
                    return dateRange[0].valueOf();
                  });
                  return next - prev;
                })
                .map(({ children, dateRange }, index) => (
                  <ListSection
                    key={children.title?.toString()}
                    dateRange={dateRange}
                    underline={index !== resumeData.experiences.length - 1}
                  >
                    {children}
                  </ListSection>
                ))}
            </div>
          </main>
          <aside className="flex flex-col gap-2">
            <Header>Skills & Knowledge</Header>
            <div className="pl-1.5">
              {resumeData.skills.map(
                ({ children }) =>
                  children.title && (
                    <ListSection tight key={children.title.toString()}>
                      {children}
                    </ListSection>
                  ),
              )}
            </div>
            <Header>Interests</Header>
            <div className="pl-1.5">
              <Body>{resumeData.interests}</Body>
            </div>
            <Header>Side Projects</Header>
            <div className="pl-1.5">
              <Projects />
              <div className="flex flex-col justify-center pl-2 mt-2 border-l-2 border-forest-green">
                <Body>See them on my GitHub!</Body>
              </div>
            </div>
          </aside>
          <div className="absolute bottom-1 left-2 text-xs text-body italic font-soft-serif">
            last updated at {new Date().toLocaleDateString('hu')}
          </div>
        </div>
      </div>
    </div>
  );
}
