import { DateRangeProps } from './use-date-range-types';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatDateToMonthYear(date: Date): string {
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month}, ${year}`;
}

export function formatDateRangeToMonthYear(
  dateRange: [Date, Date],
): [string, string] {
  if (dateRange[0].getFullYear() === dateRange[1].getFullYear()) {
    const monthStart = months[dateRange[0].getMonth()];
    const monthEnd = months[dateRange[1].getMonth()];
    const year = dateRange[0].getFullYear();
    return [`${monthStart}`, `${monthEnd}, ${year}`];
  } else {
    return dateRange.map((date) => formatDateToMonthYear(date)) as [
      string,
      string,
    ];
  }
}

export function useDateRange({ dateRange }: DateRangeProps) {
  let dateTimeStartText: string;
  let dateTimeEndText: string;

  const isPresent = dateRange.length === 1;

  if (isPresent) {
    dateTimeStartText = formatDateToMonthYear(dateRange[0]);
    dateTimeEndText = 'Present';
  } else {
    [dateTimeStartText, dateTimeEndText] =
      formatDateRangeToMonthYear(dateRange);
  }

  return [dateTimeStartText, dateTimeEndText];
}
