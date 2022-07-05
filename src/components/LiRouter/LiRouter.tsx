import React, { Children, FC } from "react";
import './LiRouter.css'

export interface LiProps {
    icon?: string;
    text?: string;
    className?: string;
}

const name:string = 'LiRouter'

export const LiRouter : FC<LiProps> = ({className,icon,text='text', ...props}) => {
  return( 
    <li className={`default-${name} ${className}`}>
      <div><span>{icon}</span> {text}</div>
    </li>
  )
};