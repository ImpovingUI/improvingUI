const name:string='Button'

export const validationVariant = (variant: string) => {
    if(variant === 'contained' || variant === 'outlined' || variant === 'text'){
        return `${variant}-${name}`;
    }
    return 'contained-Button';
}

export const validationSize = (size: string) => {
    if(size === 'small' || size === 'medium' || size=== 'large'){
        return `${size}-${name}`;
    }
    return 'medium-Button';
}

export const validationColor = (color: string) => {
    if(color === 'primary' || color === 'secondary' || color === 'dark' || color === 'success' || color === 'info' || color === 'warning' || color === 'danger'){
        return `${color}-${name}`;
    }
    return 'primary-Button';
}