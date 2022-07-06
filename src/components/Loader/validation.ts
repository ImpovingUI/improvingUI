const name:string='Loader'

export const validationColor = (color: string) => {
    if(color === 'primary' || color === 'secondary' || color === 'dark'){
        return `${color}-${name}`;
    }
    return 'primary-Loader';
}