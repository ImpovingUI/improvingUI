import React, { FC, useState, useEffect, JSXElementConstructor, useRef, MutableRefObject, createRef } from "react";
import "./Dropdown.css";
import {
    validationVariant,
    validationSize,
    validationColor,
} from "./validation";

export interface DropdownProps {
    image?: String | undefined;
    user?: String | undefined;
    occupation?: String;
    links?: JSX.Element[] | JSX.Element;
    //onClick?: (event: React.MouseEvent<HTMLImageElement>) => void  
}

const Dropdown: FC<DropdownProps> = ({
    image,
    user,
    occupation,
    links,
    //onClick,
    ...props
}) => {
    //const [dropdown, setDropdown] = useState(false)

    /*const handleMouseEvent = ( event: React.MouseEvent<HTMLDivElement> ) => {
        event.preventDefault(); 
        const drop = document.querySelector<HTMLDivElement>( '.dropdown-content') 
        console.log(drop)
        drop?.classList.toggle( 'dropdown-toggle') 
    }; */

    const [dropdown, setDropdown] = useState(false)

    const dropRef = useRef() as MutableRefObject<HTMLDivElement>
    const f = () => {
        dropRef.current.classList.toggle('dropdownToggle')
    }
    return (
        <div>
            <div className="dropdownItem">
                <div className="imgBox" onClick={f}>
                    <img src={image} alt={user}></img>
                </div>
            </div>
            <div className="dropdownContent dropdownToggle" ref={dropRef}>
                <div className="content">
                    <div className="name">{user}</div>
                    <div className="occupation">{occupation}</div>
                </div>
                <ul className="links"  >
                    <li ><a href="#"><i className="fa fa-user" aria-hidden="true" ></i> My Profile</a></li>
                    <li><a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</a></li>
                    <hr className="divider"/>
                    <li><a href="#"><i className="fa fa-cogs" aria-hidden="true"></i> Settings</a></li>
                    <li><a href="#"><i className="fa fa-question" aria-hidden="true"></i> Help</a></li>
                    <hr className="divider"/>
                    <li><a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown
