
import React, { FC } from "react";
import {validationType,validationVariant, validationColor} from './validation'
import './Input.css'

export interface InputProps {
  fullWidth?: boolean;
  disabled?:boolean;
  className?:string;
  width ? :number;
  type ?: 'email'|'password'|'text'|'number'|'submit';
  label?:string;
  variant?:'outlined'|'filled'| 'underlined';
  color?: 'primary' | 'secondary' |'dark'|'success'|'warning'|'danger';
  isRequired?:'required' | 'notRequired'
}

const name= 'Input'

export const Input : FC<InputProps> = ({variant="outlined", color="primary", fullWidth, isRequired, disabled,className,type="text",...props}) => {
  const [state, setState] = React.useState('notFocused');
  const [value, setValue] = React.useState('');
  const[flag, setFlag] = React.useState(false);
  const [inputType, setinputType] = React.useState('');
  const [helper, setHelper] = React.useState('hola');
  const [display, setDisplay] = React.useState('none');
  const [required, setRequiered] = React.useState('');
  const [validate, setValidate ] = React.useState('');
  const [submit, setSubmit] = React.useState('');
  

/* Checking if the type is password, then set the flag to true and the inputType to password. If the
type is not password, then set the flag to false and the inputType to the type. If the type is
number, then set the inputType to text. */
  React.useEffect(()=>{
    if(type === 'password'){
      setFlag(true);
      setinputType('password');
      setValidate('valid-input');
    }else{
      setFlag(false);
      setinputType(type);
    }
    if(type === 'number'){
      setinputType('text');
    }
    if(type === 'submit'){
      setSubmit('submit-input');
    }else{
      setSubmit('')
    }
  },[type]);

  React.useEffect(()=>{
    console.log(value);
  },[value])

/**
 * It sets the state to focused-input when the input is focused.
 */
  const handleFocus = () =>{
      setState('focused-input');
  }
/**
 * If the input is required and the type is email, number, or text, then check if the value is greater
 * than 0. If it is, then set the required state to notRequired-input, set the display state to none,
 * and call the validation function. If the value is not greater than 0, then set the helper state to
 * Field required, set the required state to required-input, and set the display state to flex
 */
  const handleBlur = () =>{
    if(isRequired === 'required' && (type === 'email' || type === 'number' || type === 'text' || type === 'submit')){
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
    }else if(type === 'email' || type === 'number' || type === 'text' || type === 'submit'){
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
    console.log(e.target.value)
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
  /**
   * The above function validates the input type email, text and number.
   */
  const validation = () =>{
/* Validating the input type email. */
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
      setValidate('valid-input');
      setDisplay('none');
    }
    if(type === 'submit'){
      setValidate('valid-input');
      setDisplay('none');
    }
/* Validating the input type number. */
    if(type === 'number'){
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
      <input type={inputType} disabled={disabled} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} value={value}
      className={`default ${fullWidth ? 'fullWidth':''} ${variant && `${variant}-${name}`} ${disabled ? 'disabled':''} 

      ${validationType(type)} 
      ${validationVariant(variant)}
      ${validationColor(color)}
      ${className}
      ${validate}
      ${required}
      ${submit}
      `
      } 

      {...props}/>
      {flag
      ?<button><img src="https://img.icons8.com/material-sharp/24/000000/visible.png" alt="eye"   
          onClick={handleClick}
        /></button>
      :<></>
      }
      <p style={{display: display}}>{helper}</p>
    </div>
      

  )
};