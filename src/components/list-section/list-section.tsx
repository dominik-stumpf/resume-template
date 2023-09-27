import { Body } from '../body';
import { Title } from '../title';
import { ListSectionProps } from './list-section-types';

export function ListSection({
  children: { paragraph, title },
  date,
  tight = false,
}: ListSectionProps) {
  return (
    <section
      className={`flex flex-col ${
        tight
          ? 'gap-1.5 py-1.5'
          : 'gap-3 py-3 border-b border-dashed border-dim'
      }`}
    >
      <div className='flex items-center justify-between'>
        <Title>{title}</Title>
        {date && (
          <div className='text-[0.6rem] font-light underline text-black'>
            April, 2023 - Present
          </div>
        )}
      </div>
      <Body>{paragraph}</Body>
    </section>
  );
}
