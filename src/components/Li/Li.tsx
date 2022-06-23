import React, { Children, FC } from "react";
// import {validationVariant,validationSize,validationColor} from './validation'
import './Li.css'

export interface LiProps {
    icon?: string;
    text?: string;
    className?: string;
}

const name = 'Li'

export const Li : FC<LiProps> = ({className,icon,text='text', ...props}) => {
  return( 
    <li className={`default-${name} ${className}`}>
      <div><span>{icon}</span> {text}</div>
    </li>
  )
};