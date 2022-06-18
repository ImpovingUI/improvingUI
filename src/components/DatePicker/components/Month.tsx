import React from "react";
import WeekDay from "./WeekDay";

const weekdays = [
  { day: "Sunday", abb: "S" },
  { day: "Monday", abb: "M" },
  { day: "Tuesday", abb: "T" },
  { day: "Wednesday", abb: "W" },
  { day: "Thursday", abb: "T" },
  { day: "Friday", abb: "F" },
  { day: "Saturday", abb: "S" },
];

export default function Month() {
  return (
    <>
      <tr className="weekdayContainer">
        {weekdays.map((weekday) => (
          <WeekDay key={weekday.day} title={weekday.abb} label={weekday.day} />
        ))}
      </tr>
    </>
  );
}
