
import React, { FC } from "react";
import {validationType,validationVariant} from './validation'
import './Input.css'

export interface ButtonProps {
  fullWidth?: boolean;
  disabled?:boolean;
  className?:string;
  width ? :number;
  type ?: 'email'|'password'|'text';
  label?:string;
  variant?:'outlined'|'filled'| 'underlined';
}

const name= 'Input'

export const Input : FC<ButtonProps> = ({variant="outlined", fullWidth, disabled,className,type="text",...props}) => {
  const [state, setState] = React.useState('notFocused');
  const [value, setValue] = React.useState('');

  const handleFocus = () =>{
      setState('focused');
  }
  const handleBlur = () =>{
    if(value.length > 0){
      setState('focused');
    }else{
      setState('notFocused');
    }
  }
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setValue(e.target.value);
  }


  return( 
    <div className="inputContainer">
      <label className={state}>{props.label}</label>
      <input type={type} disabled={disabled}  onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}
        className={`default ${fullWidth ? 'fullWidth':''} ${variant && `${variant}-${name}`} ${disabled ? 'disabled':''} 

      ${validationType(type)} 
      ${validationVariant(variant)}
      ${className}`} 

      {...props}/>
    </div>
      

  )
};
