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
