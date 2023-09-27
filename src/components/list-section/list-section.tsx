import { Body } from '../body';
import { Title } from '../title';
import { ListSectionProps } from './list-section-types';

export function ListSection({
  children: { paragraph, title },
  date,
}: ListSectionProps) {
  return (
    <section className='flex flex-col gap-3 py-3 border-b border-neutral-200'>
      <div className='flex items-center justify-between'>
        <Title>{title}</Title>
        <div className='text-xs font-light text-black underline'>
          April, 2023 - Present
        </div>
      </div>
      <Body>{paragraph}</Body>
    </section>
  );
}
