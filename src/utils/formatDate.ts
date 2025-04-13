function getTheMonthName(month: number): string {
  switch (month) {
    case 1: return "January";
    case 2: return "February";
    case 3: return "March";
    case 4: return "April";
    case 5: return "May";
    case 6: return "June";
    case 7: return "July";
    case 8: return "August";
    case 9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
    default: return "month";
  }
}


export function getCurrentDay(date: Date): string {
  return date.getDate().toString();
};

export function getCurrentMonth(date: Date): string {
  return getTheMonthName((date.getMonth() + 1));
};

export function getCurrentYear(date: Date): number {
  return date.getFullYear();
};

export default function formatDate(date: Date): string {
  const day: string = date.getDate().toString();
  const month: string = getTheMonthName((date.getMonth() + 1));

  return day + " , " + month;
};