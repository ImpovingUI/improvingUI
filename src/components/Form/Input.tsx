
import React, { FC } from "react";
import {validationType,validationVariant, validationColor} from './validation'
import './Input.css'

export interface InputProps {
  fullWidth?: boolean;
  disabled?:boolean;
  className?:string;
  width ? :number;
  type ?: 'email'|'password'|'text'|'number';
  label?:string;
  variant?:'outlined'|'filled'| 'underlined';
  color?: 'primary'|'success'|'warning'|'danger';
  //required?: boolean;
  isRequired?:'required' | 'notRequired'
}

const name = 'Input'
const colors = {
primary : '005596',
success: '5BC2A7',
warning: 'FFBB41',
danger: 'DC3545',
}
export const Input : FC<InputProps> = ({variant="outlined", color="primary", fullWidth, isRequired, disabled,className,type="text",...props}) => {
  const [state, setState] = React.useState('notFocused');
  const [value, setValue] = React.useState('');
  const[flag, setFlag] = React.useState(false);
  const [inputType, setinputType] = React.useState('');
  const [helper, setHelper] = React.useState('hola');
  const [display, setDisplay] = React.useState('none');
  //const [required, setRequiered] = React.useState(false);
  const [required, setRequiered] = React.useState('');
  const [validate, setValidate ] = React.useState('');


  React.useEffect(()=>{
    if(type === 'password'){
      setFlag(true);
      setinputType('password');
    }else{
      setFlag(false);
      setinputType(type);
    }
    if(type === 'number'){
      setinputType('text');
    }
  },[type]);

  const handleFocus = () =>{
      setState('focused-input');
  }
  const handleBlur = () =>{
    if(isRequired === 'required' && (type === 'email' || type === 'number' || type === 'text')){
      if(value.length > 0){
        setRequiered('notRequired-input');
        setDisplay('none');
        validation();
      }else{
        setHelper('Field required');
        setRequiered('required-input');
        setDisplay('flex');
      }
    }else if(isRequired === 'required'){
      if(value.length > 0){
        setRequiered('notRequired-input');
        setDisplay('none');
      }else{
        setHelper('Field required');
        setRequiered('required-input');
        setDisplay('flex');
      }
    }else if(type === 'email' || type === 'number' || type === 'text'){
      setRequiered('notRequired-input');
      validation();
    }else{
      setRequiered('notRequired-input');
      setDisplay('none');
    }
    
    if(value.length > 0){
      setState('focused-input');
    }else{
      setState('notFocused-input');
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
  const validation = () =>{
    if(type === 'email'){
      if(value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
        setValidate('valid-input');
        setDisplay('none');
      }else{
        setValidate('notValid-input');
        setHelper('Email not valid');
        setDisplay('flex');
      }
    }
    if(type === 'text'){
    }
    if(type === 'number'){
      console.log(value);
      if(value.match(/^[0-9]*$/)){
        console.log('es valido');
        setValidate('valid-input');
        setDisplay('none');
      }else{
        console.log('no es valido');
        setValidate('notValid-input');
        setHelper('Write only numbers');
        setDisplay('flex');
      }
    }
  }

  return( 
    <div className="inputContainer">
      <label className={state}>{props.label}</label>
      <input type={inputType} disabled={disabled} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}
      //required = {required}
      className={`default ${fullWidth ? 'fullWidth':''} ${variant && `${variant}-${name}`} ${disabled ? 'disabled':''} 

      ${validationType(type)} 
      ${validationVariant(variant)}
      ${validationColor(color)}
      ${className}
      ${validate}
      ${required}
      `
      } 

      {...props}/>
      {flag
      ?<button><img src={`https://img.icons8.com/ios-glyphs/30/${colors[color]}/show-password.png`} alt="eye"   
          onClick={handleClick}
        /></button>
      :<></>
      }
      <p style={{display: display}}>{helper}</p>
    </div>
      

  )
};
