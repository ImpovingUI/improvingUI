import React, {
  FC,
  useState, 
  useRef,
  MutableRefObject, 
} from "react";
import "./Dropdown.css";
import {
  validationVariant,
  validationSize,
  validationPosition,
  validationColor,
} from "./validation";

export interface DropdownProps { //<-- this is the type of the props
  image?: string | undefined;  
  user?: string | undefined;
  occupation?: string | undefined;
  links?: JSX.Element[] | JSX.Element;
  size?: "medium" | "small" | "large"; //imgBox
  variant?: "contained" | "outlined";
  position?: "left" | "right";
  color?:
    | "primary"
    | "secondary"
    | "dark"
    | "success"
    | "info"
    | "warning"
    | "danger";
}

export const Dropdown: FC<DropdownProps> = ({
  image,
  user,
  occupation,
  links,
  size = "large",
  variant = "outlined",
  position = "right",
  color = "primary",
  ...props
}) => {
  const [dropdown, setDropdown] = useState(false);

  const dropRef = useRef() as MutableRefObject<HTMLDivElement>;
  const f = () => {
    dropRef.current.classList.toggle("dropdownToggle");
  };
  return (
    <div className="dropdown">
      <div className="dropdownItem">
        <div className="imgBox" onClick={f}>
          <img src={image} alt={user}></img>
        </div>
      </div>
      <div
        className={`dropdownContent dropdownToggle ${validationVariant(
          variant
        )} ${validationColor(color)} ${validationPosition(position)}`}
        ref={dropRef}
      >
        <div className="content">
            {/* {//<div className="name">{user}</div>} */}
          <h3 className="name"> {user}</h3> 
          <h5 className="occupation">  {occupation}</h5>
          <hr className="divider" />
        </div>
        <ul className="links">{links}</ul>
      </div>
    </div>
  );
};  