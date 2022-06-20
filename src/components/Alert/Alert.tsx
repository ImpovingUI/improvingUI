import React, { FC, useLayoutEffect } from "react";
import "./Alert.css";
import ErrorIcon from "./icons/ErrorIcon";
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

  useLayoutEffect(() => {
    
    if (!show) return;

    alertRef.current?.classList.add(position);
    
    setTimeout(() => {

      if ( position.includes('left') ) 
        alertRef.current?.classList.add("hide-left");

      if ( position.includes('right'))
        alertRef.current?.classList.add("hide-right");

    }, timeOut);

  });

  return (
    <div>
      {show && (
        <div
          ref={alertRef}
          /* List of classes */
          className={`alert
                      showAlert 
                      animate__animated 
                      animate__fadeInRight 
                      ${variant} 
                      ${filled ? "filled" : "outlined"}`}
        >
          <Icon />
          <div>
            <p>{tittle}</p>
            <p> {message} </p>
          </div>
          <div>
            
          </div>
        </div>
      )}
    </div>
  );
};
