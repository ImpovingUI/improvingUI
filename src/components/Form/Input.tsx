
import React, { FC } from "react";
import {validationType,validationVariant} from './validation'
import './Input.css'

export interface ButtonProps {
  fullWidth?: boolean;
  disabled?:boolean;
  className?:string;
  width ? :number;
  type ?: 'email'|'password'|'text';
  placeholder?:string;
  variant?:'outlined'|'filled'| 'underlined';
}

const name= 'Input'

export const Input : FC<ButtonProps> = ({variant="outlined", fullWidth, disabled,className,type="text",...props}) => {
  return( 
    <input type={type} disabled={disabled}  className={`default ${fullWidth ? 'fullWidth':''} ${variant && `${variant}-${name}`} ${disabled ? 'disabled':''} 
  
    ${validationType(type)} 
    ${validationVariant(variant)}
    ${className}`} 

    {...props}/>
      

  )
};
