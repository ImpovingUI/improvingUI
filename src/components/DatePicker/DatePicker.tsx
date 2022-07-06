import React, { FC, useEffect, useLayoutEffect } from "react";
import { validationColor } from "./validation";
import "./DatePicker.css";
import Month from "./components/Month";
import { getByTitle } from "@storybook/testing-library";
const arrowleft = require("./assets/icons/arrowleft.svg");
const arrowright = require("./assets/icons/arrowright.svg");
import { Input } from "./components/Input";
import { TbodyDays } from "./components/TbodyDays";
import { MonthYearSelection } from "./components/MonthYearSelection";

export interface DatePickerProps {
  initialDate: string;
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "dark"
    | "success"
    | "info"
    | "warning"
    | "danger";
  fullWidth?: boolean;
  blockedDates?: string[];
  value: string;
}

export const DatePicker: FC<DatePickerProps> = ({
  initialDate="",
  color = "primary",
  className,
  blockedDates = [],
  fullWidth,
  value,
  ...props
}) => {
  //set state month and year
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [focus, setFocus] = React.useState(false);
  const [focusTable, setfocusTable] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(initialDate);
  //hook of matriz of days
  const [daysInMonth, setDaysInMonth] = React.useState([[""], [""]]);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [yearRange, setYearRange] = React.useState("");
  const [years, setYears] = React.useState([[0], [0]]);
  const [validDate, setValidDate] = React.useState(false);

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

  const getYears = (year: number) => {
    let yearaux = Math.floor(year / 10) * 10;
    let years = [];
    let yearMatrix: number[][] = [];
    yearaux = yearaux - 1;
    for (let i = 0; i < 13; i++) {
      if (i % 3 === 0) {
        yearMatrix.push(years);
        years = [];
      }
      years.push(yearaux + i);
    }
    setYearRange(yearaux + " - " + (yearaux + 11));
    setYears([...yearMatrix]);
  };

  //change to previous month
  const prevMonth = () => {
    if (selectedOption === "") {
      if (month === 0) {
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    } else if (selectedOption === "year") {
      setYear(year - 10);
      getYears(year);
    }
  };

  // next month
  const nextMonth = () => {
    if (selectedOption === "") {
      //change month to next month
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    }
    if (selectedOption === "year") {
      setYear(year + 10);
      getYears(year);
    }
  };

  useEffect(() => {
    if (validDate) {
      value = selectedDate;
    }
  }, [selectedDate]);

  useEffect(() => {
    if (month === -1) {
      setMonthText("Invalid Date");
    } else {
      setDaysInMonth([...getDaysInMonth(month, year)]);

      let montht = new Date(year, month).toLocaleString("en-us", {
        month: "long",
      });
      setMonthText(montht);
    }
  }, [month, year]);

  useLayoutEffect(() => {
    if (initialDate !== "") {
      let date = initialDate.split("/");
      //check if the date is valid

      if (
        parseInt(date[0]) <= 12 &&
        parseInt(date[1]) <= 31 &&
        parseInt(date[1]) > 0 &&
        blockedDates.indexOf(initialDate) === -1
      ) {
        setValidDate(true);
        setMonth(parseInt(date[0]) - 1);
        setYear(parseInt(date[2]));
        setDaysInMonth([...getDaysInMonth(month, year)]);
        setMonthText(
          new Date(parseInt(date[2]), parseInt(date[0]) - 1).toLocaleString(
            "en-us",
            {
              month: "long",
            }
          )
        );
      } else {
        setMonthText("Invalid date");
        setValidDate(false);
        setMonth(-1);
      }
    }
  }, []);

  const changeDateToday = () => {
    setValidDate(true);
    //set selected date to today
    //set month and year to today
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
    setDaysInMonth([...getDaysInMonth(month, year)]);
    setMonthText(
      new Date().toLocaleString("en-us", {
        month: "long",
      })
    );

    //set day
    let day1 = new Date().getDate().toString();
    let month1 = new Date().getMonth();
    let year1 = new Date().getFullYear();

    setSelectedDate(
      (month1 + 1 < 10 ? "0" + (month1 + 1) : month1 + 1) +
        "/" +
        (day1.length < 2 ? "0" + day1 : day1) +
        "/" +
        year1
    );
  };

  return (
    <div id="container-datepicker">
      <div className="container-datepicker-input">
        <Input
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setValidDate={setValidDate}
          setMonth={setMonth}
          month={month}
          setYear={setYear}
          year={year}
          setDaysInMonth={setDaysInMonth}
          setMonthText={setMonthText}
          setSelectedOption={setSelectedOption}
          blockedDates={blockedDates}
          getDaysInMonth={getDaysInMonth}
          setFocus={setFocus}
          fullWidth={fullWidth}
        />
      </div>
      {focus || focusTable ? (
        <div
          className={`container-picker ${validationColor(color)} ${className} `}
          {...props}
          // ${value}
          // {blockedDates}
          onFocus={(e) => {
            setfocusTable(true);
          }}
          onBlur={(e) => {
            setFocus(false);
            setfocusTable(false);
          }}
          tabIndex={0}
          id="container-datepicker"
        >
          <div className="container-picker__header">
            <span>
              <img
                src={arrowleft}
                alt="arrow-left"
                onClick={() => prevMonth()}
              />
            </span>
            <div className="container-picker__date">
              {selectedOption === "year" ? (
                <span>{yearRange}</span>
              ) : (
                <>
                  <span
                    onClick={() => {
                      setSelectedOption("month");
                    }}
                  >
                    {monthText}
                  </span>
                  <span
                    onClick={() => {
                      setSelectedOption("year");
                      getYears(year);
                    }}
                  >
                    {year}
                  </span>
                </>
              )}
            </div>
            <span>
              <img
                src={arrowright}
                alt="arrow-right"
                onClick={() => nextMonth()}
              />
            </span>
          </div>

          <div className="container-picker__body">
            {selectedOption == "" ? (
              <table id="calendar" className="picker-content">
                <thead>
                  <Month />
                </thead>
                <TbodyDays
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  changeDateToday={changeDateToday}
                  setValidDate={setValidDate}
                  daysInMonth={daysInMonth}
                  month={month}
                  year={year}
                  blockedDates={blockedDates}
                  validDate={validDate}
                />
              </table>
            ) : null}
          </div>

          <MonthYearSelection
            year={year}
            month={month}
            setYear={setYear}
            setMonth={setMonth}
            years={years}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            getYears={getYears}
          />
        </div>
      ) : null}
    </div>
  );
};
