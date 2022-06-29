
export const validationVariant = (variant: string) => {
    if(variant === 'contained' || variant === 'outlined' || variant === 'text'){
        return variant;
    }
    return 'contained';
}

export const validationSize = (size: string) => {
    if(size === 'small' || size === 'medium' || size=== 'large'){
        return size;
    }
    return 'medium';
}

export const validationColor = (color: string) => {
    if(color === 'primary' || color === 'secondary' || color === 'dark' || color === 'success' || color === 'info' || color === 'warning' || color === 'danger'){
        return color;
    }
    return 'primary';
}

export const validationPosition = (position: string) => {
    if(position === 'left' || position=== 'right'){
        return position;
    }
    return 'right';
}