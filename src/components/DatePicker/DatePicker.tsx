import React, { FC, useEffect, useLayoutEffect } from "react";
import { useState, createContext, useContext } from "react";
import { validationColor } from "./validation";
import "./DatePicker.css";
import Month from "./components/Month";
import { getByTitle } from "@storybook/testing-library";
import { Input } from "./components/Input";
import { TbodyDays } from "./components/TbodyDays";
import { MonthYearSelection } from "./components/MonthYearSelection";

export interface DatePickerProps {
  initialDate: string;
  className?: string;
  format?: "dd/mm/yyyy" | "mm/dd/yyyy" | "dd-mm-yyyy" | "mm-dd-yyyy";
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
  name: string;
  label: string;
  isRequired?: boolean;
  value: any;
  setValue: (value: string) => void;
  //pedir una funcion typescript
  onChange(e:any): any;
}

export const DatePicker: FC<DatePickerProps> = ({
  initialDate = "",
  color = "primary",
  className,
  format = "dd/mm/yyyy",
  blockedDates = [],
  fullWidth,
  name,
  label,
  isRequired,
  value,
  setValue,
  onChange,
  ...props
}) => {
  //set state month and year

  const [seperator, setSeparator] = useState(format.includes("/") ? "/" : "-");
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = React.useState(initialDate);
  //hook of matriz of days
  const [daysInMonth, setDaysInMonth] = React.useState([[""], [""]]);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [yearRange, setYearRange] = React.useState("");
  const [years, setYears] = React.useState([[0], [0]]);
  const [validDate, setValidDate] = React.useState(false);
  const [addClassValidate, setAddClassValidate] = useState("");

  //get month in text
  const [monthText, setMonthText] = React.useState(
    new Date().toLocaleString("en-us", {
      month: "long",
    })
  );

  const [showTable, setShowTable] = React.useState("none");
  const [FocusTable, setFocusTable] = React.useState(false);

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
      // setValue(selectedDate);
      // onChange(selectedDate);

      setValue({ ...value, [name]: selectedDate });
    } else {
      // setValue("");
      setValue({ ...value, [name]: "" });
    }
  }, [selectedDate]);

  useEffect(() => {
    if (month === -1) {
      setMonthText("Invalid Date");
      setAddClassValidate("invalid-date");
    } else {
      setDaysInMonth([...getDaysInMonth(month, year)]);

      let montht = new Date(year, month).toLocaleString("en-us", {
        month: "long",
      });
      setMonthText(montht);
      setAddClassValidate("");
    }
  }, [month, year]);

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

    if (format === "mm/dd/yyyy" || format === "mm-dd-yyyy") {
      setSelectedDate(
        (month1 + 1 < 10 ? "0" + (month1 + 1) : month1 + 1) +
          seperator +
          (day1.length < 2 ? "0" + day1 : day1) +
          seperator +
          year1
      );
    }
    if (format === "dd/mm/yyyy" || format === "dd-mm-yyyy") {
      setSelectedDate(
        (day1.length < 2 ? "0" + day1 : day1) +
          seperator +
          (month1 + 1 < 10 ? "0" + (month1 + 1) : month1 + 1) +
          seperator +
          year1
      );
    }
  };

  return (
    <div
      id="container-datepicker"
      className="container-picker-grl"

      // onBlur={(e) => {
      //   setFocus(false);
      //   setShowTable("none");

      // }}
    >
      <div
        className="container-picker-input_label"
        onFocus={(e) => {
          setShowTable("block");
        }}
        onBlur={(e) => {
          if (!FocusTable) {
            setShowTable("none");
          }
        }}
      >
        <Input
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setValidDate={setValidDate}
          setAddClassValidate={setAddClassValidate}
          addClassValidate={addClassValidate}
          monthText={monthText}
          setMonth={setMonth}
          month={month}
          setYear={setYear}
          year={year}
          setDaysInMonth={setDaysInMonth}
          setMonthText={setMonthText}
          setSelectedOption={setSelectedOption}
          blockedDates={blockedDates}
          getDaysInMonth={getDaysInMonth}
          fullWidth={fullWidth}
          format={format}
          name={name}
          label={label}
          isRequired={isRequired}
          seperator={seperator}
          onChange={onChange}
          {...props}
        />
        {/* <div className="container-datepicker-input">
        </div> */}
      </div>

      <div
        style={{ display: showTable }}
        onMouseOver={(e) => {
          setFocusTable(true);
        }}
        onMouseLeave={(e) => {
          setFocusTable(false);
        }}
        onBlur={(e) => {
          setFocusTable(false);
          setShowTable("none");
        }}
      >
        <div
          className={`container-picker ${validationColor(
            color
          )}-picker ${className} `}
          {...props}
          tabIndex={0}
          id="container-datepicker"
        >
          <div className="container-picker__header">
            <span>
              <label onClick={() => prevMonth()}>←</label>
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
              <label onClick={() => nextMonth()}>→</label>
            </span>
          </div>

          <div className="container-picker__body" onFocus={(e) => {}}>
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
                  format={format}
                  separator={seperator}
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
      </div>
    </div>
  );
};
