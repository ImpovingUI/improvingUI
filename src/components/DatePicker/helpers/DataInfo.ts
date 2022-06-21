export const Weekdays: {name: string, abb:string}[] = [
  { name: "Sunday", abb: "S" },
  { name: "Monday", abb: "M" },
  { name: "Tuesday", abb: "T" },
  { name: "Wednesday", abb: "W" },
  { name: "Thursday", abb: "T" },
  { name: "Friday", abb: "F" },
  { name: "Saturday", abb: "S" },
];

export const CurrentYear: number = new Date().getFullYear();

export const CurrentMonth: number = new Date().getMonth() ;

export const CurrentNameMonth: string = new Date().toLocaleString("en-us", {month:'long'});