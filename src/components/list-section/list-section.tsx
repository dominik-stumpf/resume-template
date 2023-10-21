import { useDateRange } from '@/src/hooks/use-date-range/use-date-range';
import { Body } from '../body';
import { Title } from '../title';
import { ListSectionProps } from './list-section-types';

export function ListSection({
  children: { paragraph, title },
  dateRange,
  tight = false,
  underline = false,
}: ListSectionProps) {
  const parsedDate = dateRange && useDateRange({ dateRange: dateRange });

  return (
    <section
      className={`flex flex-col ${tight ? 'gap-1.5 py-1.5' : 'gap-3 py-3'}
      ${underline && 'border-b border-dashed border-dim'}
    `}
    >
      <div className="flex items-center justify-between">
        <Title>{title}</Title>
        {parsedDate !== undefined && (
          <div className="text-[0.6rem] font-light text-black before:w-full before:h-[1px] before:bg-dim before:block before:translate-y-[-3px] before:absolute before:bottom-0 before:-z-10 relative whitespace-nowrap">
            <time>{parsedDate[0]}</time> - <time>{parsedDate[1]}</time>
          </div>
        )}
      </div>
      <Body>{paragraph}</Body>
    </section>
  );
}
