import React from "react";
import WeekDay from "./WeekDay";

const weekdays = [
  { day: "Sunday", abb: "Sun" },
  { day: "Monday", abb: "Mon" },
  { day: "Tuesday", abb: "Tue" },
  { day: "Wednesday", abb: "Wed" },
  { day: "Thursday", abb: "Thu" },
  { day: "Friday", abb: "Fri" },
  { day: "Saturday", abb: "Sat" },
];

export default function Month() {
  return (
    <>
      <div className="weekdayContainer">
        {weekdays.map((weekday) => (
          <WeekDay key={weekday.day} title={weekday.abb} label={weekday.day} />
        ))}
      </div>
    </>
  );
}
