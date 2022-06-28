import { isValidElement } from "react";

export const validationColumn = (variant: String[]) => {
    if(Array.isArray(variant) && variant.length > 0 && typeof(variant[0]) === 'string'){
        return variant;
    }
    return [] as String[];
}

export const validationIndex = (variant: Number[]) => {
    if(Array.isArray(variant) && variant.length > 0 && typeof(variant[0]) === 'number'){
        return variant;
    }
    return [] as Number[];
}

export const validationRow = (variant: Object[]) => {
    if(Array.isArray(variant) && variant.length > 0 && typeof(variant[0]) === 'object'){
        return variant;
    }
    return [] as Object[];
}

export const validationAction = (variant: JSX.Element[]) => {
    if(Array.isArray(variant) && variant.length > 0 && isValidElement(variant[0])){
        return variant;
    }
    return [] as JSX.Element[];
}

