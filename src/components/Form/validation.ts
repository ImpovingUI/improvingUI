

export const validationVariant = (variant: string) => {
    if(variant === 'outlined' || variant === 'filled' || variant === 'underlined' ){
        return variant;
    }
    return 'outlined';
}
export const validationType = (type: string) => {
    if(type === 'email' || type === 'password' || type === 'text' ) {
        return type;
    }
    return 'text';
}

export const validationColor = (color: string) => {
    if(color ===  'primary' || color ===  'success' || color ===  'warning' || color ===  'danger' ){
        return color;
    }
    return 'primary';
}