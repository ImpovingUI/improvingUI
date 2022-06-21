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
  const [focus, setfocus] = React.useState(false);
  const [focusTable, setfocusTable] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState("mm/dd/yyyy");
  //hook of matriz of days
  const [daysInMonth, setDaysInMonth] = React.useState([[""], [""]]);

  //get month in text
  const [monthText, setMonthText] = React.useState(
    new Date().toLocaleString("en-us", {
      month: "long",
    })
  );

  const getDaysInMonth = (month: number, year: number) => {
    let firstDay = new Date(year, month, 1);
    let days = new Date(year, month + 1, 0).getDate();
    let weekday = firstDay.getDay();

    let daysaux = [];
    let daysaux2 = [];

    for (let i = 0; i < weekday; i++) {
      daysaux.push("");
    }

    for (let i = 0; i < days; i++) {
      daysaux.push((i + 1).toString());

      if (daysaux.length % 7 === 0) {
        daysaux2.push(daysaux);
        daysaux = [];
      }

      if (i === days - 1) {
        daysaux2.push(daysaux);
      }
    }
    return daysaux2;
  };

  useEffect(() => {
    setDaysInMonth([...getDaysInMonth(month, year)]);

    let montht = new Date(year, month).toLocaleString("en-us", {
      month: "long",
    });
    setMonthText(montht);
  }, [month, year]);

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
  };

  return (
    <div id="container-datepicker">
      <div className="container-datepicker-input">
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          className="datepicker__input"
          id="input"
          onFocus={(e) => {
            setfocus(true);
          }}
          value={selectedDate}
        />
      </div>
      {focus || focusTable ? (
        <div
          className={`container-datepicker ${validationColor(
            color
          )} ${className}`}
          {...props}
          onFocus={(e) => {
            setfocusTable(true);
          }}
          onBlur={(e) => {
            setfocus(false);
            setfocusTable(false);
          }}
          tabIndex={0}
          id="container-datepicker"
        >
          <div className="container-datepicker__title">
            <span>
              <img
                src={arrowleft}
                alt="arrow-left"
                onClick={() => prevMonth()}
              />
            </span>
            <div className="container-datepicker__date">
              <span>{monthText}</span>
              <span>{year}</span>
            </div>
            <span>
              <img
                src={arrowright}
                alt="arrow-right"
                onClick={() => nextMonth()}
              />
            </span>
          </div>

          <div className="container-datepicker__namedays"></div>

          <div>
            <table id="calendar" className="calendar">
              <Month />
              <tbody>
                {daysInMonth.map((day, index) => {
                  return (
                    <tr key={index}>
                      {day.map((day, index) => {
                        return (
                          <td
                            key={index}
                            className="calendar__day"
                            title={
                              (month + 1 < 10 ? "0" + (month + 1) : month + 1) +
                              "/" +
                              (day.length < 2 ? "0" + day : day) +
                              "/" +
                              year
                            }
                            // if click on day, set selectedDate to title of td
                            onClick={() => {
                              setSelectedDate(
                                (month + 1 < 10
                                  ? "0" + (month + 1)
                                  : month + 1) +
                                  "/" +
                                  (day.length < 2 ? "0" + day : day) +
                                  "/" +
                                  year
                              );
                            }}
                          >
                            {day}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
};
