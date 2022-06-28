import React, {FC} from 'react'
import 'Dropdown.css' 

export interface SelectProps {
    className?: string;
    value: string;
    LeftIcon: string;
    RightIcon: string; 
}
export const Select: FC<SelectProps> = ({className, value, LeftIcon, RightIcon, ...props}) => {
    return(
        <select className={`default ${className}`} {...props}> 
            <option >{value}</option> 
        </select>
    ) 
} 

