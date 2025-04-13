export interface IMonth {
  number: number;
  description: string;
  days: number;
}

const MonthOptions: IMonth[] = [
  {
    number: 1,
    description: "January",
    days: 31,
  },
  {
    number: 2,
    description: "February",
    days: 28,
  },
  {
    number: 3,
    description: "March",
    days: 31,
  },
  {
    number: 4,
    description: "April",
    days: 30,
  },
  {
    number: 5,
    description: "May",
    days: 31,
  },
  {
    number: 6,
    description: "June",
    days: 30,
  },
  {
    number: 7,
    description: "July",
    days: 31,
  },
  {
    number: 8,
    description: "August",
    days: 31,
  },
  {
    number: 9,
    description: "September",
    days: 30,
  },
  {
    number: 10,
    description: "October",
    days: 31,
  },
  {
    number: 11,
    description: "November",
    days: 30,
  },
  {
    number: 12,
    description: "December",
    days: 31,
  },
];

export default MonthOptions;
