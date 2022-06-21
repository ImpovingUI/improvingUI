import React, { FC, useLayoutEffect, useState, useEffect } from "react";
import "./Alert.css";
import CloseIcon from "./icons/CloseIcon";
import { validateIcon } from "./validation";

export interface AlertProps {
  show: boolean;
  variant: "success" | "error" | "warning" | "info";
  filled: boolean;
  closeAutomatic: boolean;
  timeOut?: number;
  message: string;
  tittle?: string;
  position: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  Icon?: FC;
}

export const Alert: FC<AlertProps> = ({
  show = true,
  variant = "success",
  filled = true,
  closeAutomatic = true,
  timeOut = 3000,
  message = "",
  tittle = "",
  position = "top-right",
  Icon = validateIcon(variant),
}) => {
  const alertRef = React.useRef<HTMLDivElement>(null);

  const [close, setClose] = useState(show)


  const closeAlert = () =>{
    setClose(false)
  }

  useEffect(() => {
    setClose(show);
  }, [show])

  useLayoutEffect(() => {
    if (!show) return;

    if (position.includes("left"))
      alertRef.current?.classList.add("animate__fadeInLeft");

    if (position.includes("right"))
      alertRef.current?.classList.add("animate__fadeInRight");

    setTimeout(() => {
      if (position.includes("left"))
        alertRef.current?.classList.add("hide-left");

      if (position.includes("right"))
        alertRef.current?.classList.add("hide-right");
    }, timeOut);
  });

  return (
    <div>
      {close && (
        <div
          ref={alertRef}
          /* List of classes */
          className={`alert
                      showAlert 
                      ${position}
                      animate__animated            
                      ${variant} 
                      ${filled ? "filled" : "outlined"}`}
        >
          <Icon />
          <div className="div-text-close">
            <div>
              <p className="title">{tittle}</p>
              <p className="message"> {message} </p>
            </div>

            {!closeAutomatic && (
            <div onClick={closeAlert}>
              <CloseIcon />
            </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
