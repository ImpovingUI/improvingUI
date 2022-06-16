import React, { FC } from "react";
import { validationColor } from "./validation";
import "./DatePicker.css";
import Month from "./components/Month";

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
  return (
    <>
      <div className="container-datepicker-input">
        <input
          type="text"
          placeholder="dd-mm-yy"
          className="datepicker__input"
        />
      </div>
      <div
        className={`container-datepicker ${validationColor(
          color
        )} ${className}`}
        {...props}
      >
        <div className="container-datepicker__title">
          <span>&lt;</span>
          <div className="container-datepicker__date">
            <span>June</span>
            <span>2022</span>
          </div>
          <span>&gt;</span>
        </div>

        <div className="container-datepicker__namedays">
          <Month />
        </div>
      </div>
    </>
  );
};
