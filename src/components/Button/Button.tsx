import React, { FC } from "react";
import {validationVariant,validationSize,validationColor} from './validation'
import './Button.css'

export interface ButtonProps {
  label: string;
  iconLeft?: string;
  iconRight?: string;
  fullWidth?: boolean;
  disabled?:boolean;
  size?: "medium" | "small" | "large";
  variant?: "contained" | "outlined" | "text";
  color?: 'primary' | 'secondary' |'dark'|'success'|'info'|'warning'|'danger';
}


export const Button : FC<ButtonProps> = ({variant="contained", color="secondary", label="label", size="medium", fullWidth, iconLeft,iconRight,disabled, ...props}) => {
  return( 
    <button disabled={disabled}  className={`default 
    ${fullWidth && 'fullWidth'}
    ${disabled && 'disabled'}
    ${validationVariant(variant)}
    ${validationSize(size)} 
    ${validationColor(color)}`} 
    {...props}>
      {iconLeft ? <><span className='icon-container-left'>{iconLeft.trim()}</span>{label.trim()}</>:iconRight ?  <>{label.trim()}<span className='icon-container-right'>{iconRight.trim()}</span></> :label.trim() }
    </button>
  )
};
