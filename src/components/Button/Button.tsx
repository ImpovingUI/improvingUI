import React, { FC } from "react";
import {validationVariant,validationSize,validationColor} from '../validation'
import './Button.css';
import '../root.css'

interface ButtonProps {
  label: string;
  iconLeft?: string;
  iconRight?: string;
  size?: "medium" | "small" | "large";
  variant?: "contained" | "outlined" | "text";
  color?: 'primary' | 'secondary' | 'success' |'warning'|'danger';
}


const Button : FC<ButtonProps> = ({variant="contained", color="primary", label, size="medium", iconLeft,iconRight, ...props}) => {
  return( 
    <button  className={`initial 
    ${validationVariant(variant)} 
    ${validationSize(size)} 
    ${validationColor(color)}`} 
    {...props}>
      {iconLeft ? <><span className='icon-container-left'>{iconLeft.trim()}</span>{label.trim()}</>:iconRight ?  <>{label.trim()}<span className='icon-container-right'>{iconRight.trim()}</span></> :label.trim() }
    </button>
  )
};

export default Button;

