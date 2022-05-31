
export const validationVariant = (variant: string) => {
    if(variant === 'contained' || variant === 'outlined' || variant === 'text'){
        return variant;
    }
    return null;
}

export const validationSize = (size: string) => {
    if(size === 'small' || size === 'medium' || size=== 'large'){
        return size;
    }
    return null;
}

export const validationColor = (color: string) => {
    if(color === 'primary' || color === 'secondary' || color === 'success' || color === 'warning' || color === 'danger'){
        return color;
    }
    return null;
}