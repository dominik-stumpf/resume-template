import { Body } from '../body';
import { Title } from '../title';
import { ListSectionProps } from './list-section-types';

export function ListSection({
  children: { paragraph, title },
  date,
}: ListSectionProps) {
  return (
    <section className='flex flex-col gap-3 py-3 border-b border-dim'>
      <div className='flex items-center justify-between'>
        <Title>{title}</Title>
        <div className='text-[0.6rem] font-light underline text-black'>
          April, 2023 - Present
        </div>
      </div>
      <Body>{paragraph}</Body>
    </section>
  );
}
