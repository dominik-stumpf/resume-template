import {
  formatDateRangeToMonthYear,
  formatDateToMonthYear,
} from '@/src/date-tools/date-formatter';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const ArticleTitleDateBox = styled.div({
  display: 'flex',
  gap: 16,
  alignItems: 'center',
});

export function ArticleTitleDate({
  title,
  dateRange,
  isPresent = false,
}: ArticleTitleDateProps) {
  const [currentDate, setCurrentDate] = useState<Date | undefined>();

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (currentDate === undefined) {
    return null;
  }

  let dateTimeStart: string;
  let dateTimeEnd: string;
  let dateTimeStartText: string;
  let dateTimeEndText: string;

  if (isPresent) {
    dateRange = dateRange as Date;
    dateTimeStart = dateRange.toISOString();
    dateTimeEnd = currentDate.toISOString();
    dateTimeStartText = formatDateToMonthYear(dateRange);
    dateTimeEndText = 'Present';
  } else {
    dateRange = dateRange as [Date, Date];
    [dateTimeStart, dateTimeEnd] = dateRange.map((date) => date.toISOString());
    [dateTimeStartText, dateTimeEndText] =
      formatDateRangeToMonthYear(dateRange);
  }

  return (
    <ArticleTitleDateBox>
      <h3>{title}</h3>|
      <div>
        <time dateTime={dateTimeStart}>{dateTimeStartText}</time>
        &nbsp;-&nbsp;
        <time dateTime={dateTimeEnd}>{dateTimeEndText}</time>
      </div>
    </ArticleTitleDateBox>
  );
}
