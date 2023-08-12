interface ArticleTitleDateNoPresent {
  title: string;
  dateRange: [Date, Date];
  isPresent?: false;
}

interface ArticleTitleDatePresent {
  title: string;
  dateRange: Date;
  isPresent?: true;
}

type ArticleTitleDateProps =
  | ArticleTitleDateNoPresent
  | ArticleTitleDatePresent;
