import React, { FC } from "react";
import {validationColor} from './validation'
import "./Loader.css"

export interface LoaderProps {
  visible?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "dark"
    | "success"
    | "info"
    | "warning"
    | "danger";
}

const name: String = "Loader";

export const Loader: FC<LoaderProps> = ({
  color = "primary",
  visible = false,
}) => {
  return (
    <div
      className={`container-gral-${name} ${validationColor(color)} ${
        visible && `visible-${name}`
      }`}
    >
      <div className={`container-spinner-${name}`}>
        <div className={`spinner-load-${name}`}>
          <div className={`spinner-load-dot-${name}`}></div>
          <div className={`spinner-load-dot-${name}`}></div>
          <div className={`spinner-load-dot-${name}`}></div>
          <div className={`spinner-load-dot-${name}`}></div>
          <div className={`spinner-load-dot-${name}`}></div>
          <div className={`spinner-load-dot-${name}`}></div>
        </div>
      </div>
    </div>
  );
};
