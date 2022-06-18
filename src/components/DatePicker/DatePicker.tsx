import React, { FC, useEffect } from "react";
import { validationColor } from "./validation";
import "./DatePicker.css";
import Month from "./components/Month";
const arrowleft = require("./assets/icons/arrowleft.svg");
const arrowright = require("./assets/icons/arrowright.svg");

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
  //set state month and year
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());
  //get month in text
  const [monthText, setMonthText] = React.useState(
    new Date().toLocaleString("en-us", {
      month: "long",
    })
  );

  const getDaysInMonth = (month: number, year: number) => {
    console.log(monthText, month, year);
    let days = new Date(year, month, 0).getDate();
    let firstDay = new Date(year, month, 1);
    let weekday = firstDay.getDay();

    let tableRef = document.getElementById("calendar") as HTMLTableElement;
    let newRow = tableRef.insertRow(1);

    //clear table before adding new data
    while (tableRef.rows.length > 2) {
      tableRef.deleteRow(2);
    }

    for (let i = 0; i < weekday; i++) {
      let newCell = newRow.insertCell(i);
      newCell.innerHTML = "";
    }

    let newCell = newRow.insertCell(weekday);
    newCell.innerHTML = "1";

    newCell.setAttribute(
      "data-day",
      "01/" + (month + 1 < 10 ? "0" + (month + 1) : month + 1) + "/" + year
    );
    // add onclick event in the cell to show the date
    newCell.addEventListener("click", function () {
      let date = this.getAttribute("data-day");
      console.log(date);
      // actualiza la fecha en el input
      document.getElementById("input")?.setAttribute("placeholder", date ?? "");
    });

    let rowcount = 1;
    let cellcount = weekday + 1;

    if (weekday === 6) {
      rowcount++;
      newRow = tableRef.insertRow(rowcount);
      cellcount = 0;
    }

    for (let i = 1; i < days; i++) {
      let newCell = newRow.insertCell(cellcount);
      cellcount++;
      newCell.innerHTML = (i + 1).toString();
      newCell.setAttribute(
        "data-day",
        //if the day is less than 10, add 0 before the day
        (i + 1 < 10 ? "0" + (i + 1) : i + 1) +
          "/" +
          (month + 1 < 10 ? "0" + (month + 1) : month + 1) +
          "/" +
          year
      );

      newCell.addEventListener("click", function () {
        let date = this.getAttribute("data-day");
        console.log(date);
        // actualiza la fecha en el input
        document.getElementById("input")?.setAttribute("placeholder", date ?? "");
      });

      if ((i + 1 + weekday) % 7 === 0) {
        rowcount++;
        newRow = tableRef.insertRow(rowcount);
        cellcount = 0;
      }
    }
  };

  useEffect(() => {
    getDaysInMonth(month, year);
    let montht = new Date(year, month).toLocaleString("en-us", {
      month: "long",
    });
    setMonthText(montht);
  }, [[month, year]]);

  //change to previous month
  const prevMonth = () => {
    console.log("prev month");
    //change month to previous month0
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }

    //getDaysInMonth(month, year);
  };

  //next month
  const nextMonth = () => {
    //change month to next month
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }

    //getDaysInMonth(month, year);
  };

  return (
    <>
      <div className="container-datepicker-input">
        <input
          type="text"
          placeholder="dd-mm-yy"
          className="datepicker__input"
          id="input"
        />
      </div>
      <div
        className={`container-datepicker ${validationColor(
          color
        )} ${className}`}
        {...props}
      >
        <div className="container-datepicker__title">
          <span>
            <img src={arrowleft} alt="" onClick={() => prevMonth()} />
          </span>
          <div className="container-datepicker__date">
            <span>{monthText}</span>
            <span>{year}</span>
          </div>
          <span>
            <img src={arrowright} alt="" onClick={() => nextMonth()} />
          </span>
        </div>

        <div className="container-datepicker__namedays"></div>

        <div>
          <table id="calendar" className="calendar">
            <Month />
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
