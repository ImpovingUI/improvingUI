
import React, { FC } from "react";
import {validationType,validationVariant, validationColor} from './validation'
import './Input.css'

export interface ButtonProps {
  fullWidth?: boolean;
  disabled?:boolean;
  className?:string;
  width ? :number;
  type ?: 'email'|'password'|'text';
  color : 'primary'| 'success'| 'warning' | 'danger';
  label?:string;
  variant?:'outlined'|'filled'| 'underlined';
  value?:string;
}

const name = 'Input'

export const Input : FC<ButtonProps> = ({variant="outlined", fullWidth, disabled,className, color, type="text",...props}) => {
  const [state, setState] = React.useState('notFocused');
  const [value, setValue] = React.useState('');
  const[flag, setFlag] = React.useState(false);
  const [inputType, setinputType] = React.useState('');
  const colors = {primary:'005596', success:'5BC2A7' , warning:'FFBB41' , danger:'DC3545'}

  React.useEffect(()=>{
    if(type === 'password'){
      setFlag(true);
      setinputType('password');
    }else{
      setFlag(false);
      setinputType(type);
    }
  },[type]);

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
  const handleClick = () =>{
    console.log('hola');
    if(inputType === "password"){
      setinputType('text');
    }else{
      setinputType('password');
    }
  }


  return( 
    <div className="inputContainer">
      <label className={state}>{props.label}</label>
      <input type={inputType} disabled={disabled} color={color} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}
        className={`default ${fullWidth ? 'fullWidth':''} ${variant && `${variant}-${name}`} ${disabled ? 'disabled':''} 

      ${validationType(type)} 
      ${validationVariant(variant)}
      ${validationColor(color)}
      ${className}`} 
      
      {...props}/>
      {flag
      ?<button><img src={`https://img.icons8.com/ios-glyphs/30/${colors[color]}/show-password.png`} alt="eye"   
          onClick={handleClick}
        /></button>
      :<></>
      }
    </div>
      

  )
};
