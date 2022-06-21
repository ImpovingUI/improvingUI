import React, { FC, useEffect, useState } from "react";
import { validationColor } from "./validation";
import "./DatePicker.css";
import Table from "./components/Table";
import {
  Weekdays,
  CurrentYear,
  CurrentMonth,
  CurrentNameMonth,
} from "./helpers/DataInfo";

const arrowLeft = require("./assets/icons/arrowLeft.svg");
const arrowRight = require("./assets/icons/arrowRight.svg");

export interface DatePickerProps {
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "dark"
    | "success"
    | "info"
    | "warning"
    | "danger";
}

export const DatePicker: FC<DatePickerProps> = ({
  color = "primary",
  className,
  ...props
}) => {
  const [infoNameDays, setInfoNameDays] = useState(Weekdays);
  const [year, setYear] = useState(CurrentYear);
  const [month, setMonth] = useState(CurrentMonth);
  const [nameMonth, setNameMonth] = useState(CurrentNameMonth);
  // console.log(infoNameDays);

  useEffect(() => {
    let newMonth = new Date(year, month).toLocaleString("en-us", {
      month: "long",
    });
    setNameMonth(newMonth);
  }, [month, year]);

  const prevMonth = () => {
    console.log("prev month");
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <>
      <div className="container-picker-input">
        <input type="text" placeholder="dd-mm-yy" className="picker__input" />
      </div>

      <div
        className={`container-picker ${validationColor(color)} ${className}`}
        {...props}
      >
        <div className="container-picker__header">
          <span>
            <img src={arrowLeft} alt="" onClick={() => prevMonth()} />
          </span>
          <div className="container-picker__date">
            <span>{nameMonth}</span>
            <span>{year}</span>
          </div>
          <span>
            <img src={arrowRight} alt="" onClick={() => nextMonth()} />
          </span>
        </div>
        <div className="container-picker__body">
          <Table data={infoNameDays} />
        </div>
      </div>
    </>
  );
};
