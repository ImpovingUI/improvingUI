import React, { FC } from "react";
import {validationVariant,validationSize,validationColor} from './validation'
import './Button.css'

export interface ButtonProps {
  label?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  fullWidth?: boolean;
  disabled?:boolean;
  className?:string;
  onlyIcon?:JSX.Element;
  size?: "medium" | "small" | "large";
  variant?: "contained" | "outlined" | "text";
  color?: 'primary' | 'secondary' |'dark'|'success'|'info'|'warning'|'danger'|'ghost';
}

const name:string='Button';

export const Button : FC<ButtonProps> = ({variant="contained", color="primary", label="label", size="medium",onlyIcon, fullWidth, iconLeft,iconRight,disabled,className, ...props}) => {
  return( 
    <button disabled={disabled}  className={`default-${name} ${fullWidth ? `fullWidth-${name}`:''} ${disabled ? `disabled-${name}`:''} 
    ${validationVariant(variant)} 
    ${validationSize(size)} 
    ${validationColor(color)} 
    ${onlyIcon && `onlyIcon-${name}`} 
    ${className}`} 

    {...props}>
      {onlyIcon
      ?  onlyIcon
      : iconLeft ? <><span className={`icon-container-left-${name}`}>{iconLeft}</span>{label.trim()}</>:iconRight ?  <>{label.trim()}<span className={`icon-container-right-${name}`}>{iconRight}</span></> :label.trim() }
      
      
    </button>
  )
};
