
import React, { FC } from "react";
import {validationType,validationVariant, validationColor} from './validation'
import './Input.css'
const visible = `M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
                s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
                c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
                C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
                c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z`

export interface InputProps {
  fullWidth?: boolean;
  disabled?:boolean;
  className?:string;
  height?: string;
  type ?: 'email'|'password'|'text'|'number'|'submit'|'text-area';
  label?:string;
  variant?:'outlined'|'filled'| 'underlined';
  color?: 'primary' | 'secondary' |'dark'|'success'|'warning'|'danger';
  isRequired?:'required' | 'notRequired'
  //value: string;
  setValue:(value:string)=>void;
}

const name= 'Input'

export const Input : FC<InputProps> = ({variant="outlined", color="primary", height, fullWidth, isRequired, disabled,className,type="text", ...props}) => {
  const [state, setState] = React.useState('notFocused');
  const [value, setValue] = React.useState('');
  const[flag, setFlag] = React.useState(false);
  const [inputType, setinputType] = React.useState('');
  const [helper, setHelper] = React.useState('hola');
  const [display, setDisplay] = React.useState('none');
  const [required, setRequiered] = React.useState('');
  const [validate, setValidate ] = React.useState('');
  const [submit, setSubmit] = React.useState('');
  const [isText, setisText] = React.useState(false);
  

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
    if(type ==='text-area'){
      setinputType('text-area')
      setisText(true);
    }else{
      setisText(false);
    }
    if(type === 'submit'){
      setSubmit('submit-input');
    }else{
      setSubmit('')
    }
  },[type]);

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
    if(isRequired === 'required' && (type === 'email' || type === 'number' || type === 'text' || type === 'submit' ||type === 'text-area')){
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
    }else if(type === 'email' || type === 'number' || type === 'text' || type === 'submit'||'text-area'){
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
    console.log(e.target.value);
  }
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) =>{
    e.preventDefault()
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
    if(type==='text-area'){
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
        setValidate('valid-input');
        setDisplay('none');
      }else{
        setValidate('notValid-input');
        setHelper('Write only numbers');
        setDisplay('flex');
      }
    }
  }

  return( 
    <div className={`inputContainer ${fullWidth ? 'fullWidth-input':''}`} style={{height: height}}>
      <label className={`${state} ${validationColor(color)} `}>{props.label}</label>
      {isText 
        ? <textarea rows={10} cols={50} 
           disabled={disabled} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}     value={value} 
      
        className={`default-input ${fullWidth ? 'fullWidth-input':''} ${variant && `${variant}-${name}`} ${disabled ? 'disabled':''} 

        ${validationType(type)} 
        ${validationVariant(variant)}
        ${validationColor(color)}
        ${className}
        ${validate}
        ${required}
        ${submit}
        `
        } 
        {...props}
        />
        : <input type={inputType} disabled={disabled} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} value={value} 
      
        className={`default-input ${fullWidth ? 'fullWidth-input':''} ${variant && `${variant}-${name}`} ${disabled ? 'disabled':''} 

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
      }
      {flag 
      ?<button>
        <svg className={`input-icon-eye ${validationColor(color)} `}  height="30" width="30" viewBox="0 0 488.85 488.85"> 
          <path d={visible}/>
        </svg>
      </button>
      :<></>
      }
      <p style={{display: display}}>{helper}</p>
    </div>
      

  )
};
