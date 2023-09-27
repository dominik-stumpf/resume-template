import { Body } from '../body';
import { Title } from '../title';
import { ListSectionProps } from './list-section-types';

export function ListSection({
  children: { paragraph, title },
  date,
  tight = false,
  underline = false,
}: ListSectionProps) {
  return (
    <section
      className={`flex flex-col ${tight ? 'gap-1.5 py-1.5' : 'gap-3 py-3'}
        ${underline && 'border-b border-dashed border-dim'}
      `}
    >
      <div className='flex items-center justify-between'>
        <Title>{title}</Title>
        {date && (
          <div className='text-[0.6rem] font-light text-black after:w-full after:h-[1px] after:bg-dim after:block after:translate-y-[-4px] after:relative after:-z-10'>
            April, 2023 - Present
          </div>
        )}
      </div>
      <Body>{paragraph}</Body>
    </section>
  );
}
