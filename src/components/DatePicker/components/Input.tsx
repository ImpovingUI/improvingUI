import React, { FC, useEffect, useState } from "react";

export interface InputProps {
  selectedDate: string;
  setSelectedDate: any;
  setValidDate: any;
  setAddClassValidate: any;
  addClassValidate: string;
  monthText: string;
  setSelectedOption: any;
  setMonth: any;
  setYear: any;
  setDaysInMonth: any;
  getDaysInMonth: any;
  setMonthText: any;
  blockedDates: any;
  month: any;
  year: any;
  fullWidth?: boolean;
  name: string;
  label: string;
  format: string;
  isRequired?: boolean;
  seperator: string;
  onChange(e:any): any;
}

export const Input: FC<InputProps> = ({
  selectedDate,
  setSelectedDate,
  setValidDate,
  setAddClassValidate,
  addClassValidate,
  monthText,
  setSelectedOption,
  setMonth,
  setYear,
  getDaysInMonth,
  setDaysInMonth,
  setMonthText,
  blockedDates,
  month,
  year,
  fullWidth,
  name,
  label,
  format,
  isRequired,
  seperator,
  onChange,
  ...props
}) => {
  const [changeClass, setChangeClass] = useState("notFocused");

  const onChangeHandler = (e: any) => {
    let pos = e.target.selectionStart;

    if (
      e.target.value.length === 2 &&
      e.target.value.search(seperator) === -1
    ) {
      e.target.value = e.target.value + seperator;
    }

    if (
      e.target.value.length === 5 &&
      e.target.value.split(seperator, 2).join(seperator).length === 5
    ) {
      e.target.value = e.target.value + seperator;
    }
    if (pos) {
      if (e.target.value[pos] === seperator && pos != 1 && pos != 4) {
        e.target.setSelectionRange(pos + 1, pos + 1);
      }
      if (e.target.value.length < selectedDate.length) {
      }
    }
    if (e.target.value.length <= 10) {
      setValidDate(false);
      if (
        e.target.value.search(seperator) === 3 &&
        e.target.value.charAt(6) != seperator
      ) {
        e.target.setSelectionRange(4, 4);
      } else if (e.target.value.charAt(6) === seperator) {
        e.target.setSelectionRange(
          e.target.value.split(seperator, 2).join(seperator).length + 1,
          e.target.value.split(seperator, 2).join(seperator).length + 1
        );
      } else {
        if (e.target.value.search(/[a-zA-Z]/g) === -1) {
          setSelectedDate(e.target.value);
        }
      }
    }
    if (e.target.value.length === 10) {
      setSelectedOption("");
      let date = e.target.value.split(seperator);
      //check if the date is valid

      if (
        parseInt(date[0]) <= 12 &&
        parseInt(date[0]) >= 1 &&
        parseInt(date[1]) <= 31 &&
        parseInt(date[1]) > 0 &&
        (format === "mm/dd/yyyy" || format === "mm-dd-yyyy") &&
        blockedDates.indexOf(e.target.value) === -1
      ) {
        // console.log(blockedDates.indexOf(date));
        // console.log(date);
        // console.log(blockedDates);
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
        console.log("mes aaaaaaa");
      } else if (
        parseInt(date[1]) <= 12 &&
        parseInt(date[1]) >= 1 &&
        parseInt(date[0]) <= 31 &&
        parseInt(date[0]) > 0 &&
        (format === "dd/mm/yyyy" || format === "dd-mm-yyyy") &&
        blockedDates.indexOf(e.target.value) === -1
      ) {
        setValidDate(true);
        setMonth(parseInt(date[1]) - 1);
        setYear(parseInt(date[2]));
        setDaysInMonth([...getDaysInMonth(month, year)]);
        setMonthText(
          new Date(parseInt(date[2]), parseInt(date[1]) - 1).toLocaleString(
            "en-us",
            {
              month: "long",
            }
          )
        );

        console.log("dia aaaaaaa");
      } else {
        setMonthText("Invalid date");
        setValidDate(false);
        setMonth(-1);
      }
    }
  };
  const onKeyDownHandler = (e: any) => {
    if (e.keyCode === 8) {
      let pos = e.currentTarget.selectionStart;
      if (pos) {
        if (e.currentTarget.value[pos - 1] === seperator) {
          e.currentTarget.setSelectionRange(pos - 1, pos - 1);
        }
        if (e.currentTarget.value[pos] === seperator) {
          if (e.currentTarget.value.length < 4) {
            e.currentTarget.value =
              e.currentTarget.value.slice(0, pos - 1) +
              e.currentTarget.value.slice(pos);
            e.currentTarget.setSelectionRange(pos, pos);
          }
        }
      }
    }
  };

  const handleFocus = () => {
    setChangeClass("focused-input");
  };

  // Validate length input and if they have a text invalid date
  const handelBlur = () => {
    // console.log(selectedDate.length);
    if (selectedDate.length > 0) {
      setChangeClass("focused-input");
    } else {
      setChangeClass("notFocused");
    }

    if (
      (isRequired && selectedDate.length <= 0) ||
      monthText === "Invalid Date" || (isRequired && selectedDate.length <10)
    ) {
      setAddClassValidate("invalid-date");
    } else {
      setAddClassValidate("");
    }
  };

  useEffect(() => {
    handelBlur();
  }, [selectedDate]);

  return (
    <>
      <label className={changeClass}>{label}</label>
      <input
        type="text"
        name={name}
        id="input"
        autoComplete="off"
        // placeholder={format}
        className={`picker__input ${
          fullWidth ? "fullWidth__picker" : ""
        } ${addClassValidate}`}
        // call onChangeHandle and onChange in the Onchange event
        onChange={(e) => {
          onChangeHandler(e);
          onChange(e);
        }}
        onKeyDown={onKeyDownHandler}
        value={selectedDate}
        onFocus={handleFocus}
        onBlur={handelBlur}
        {...props}
      />
    </>
  );
};
