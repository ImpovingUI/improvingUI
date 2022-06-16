export const validationColor = (color: string) => {
  if(color === 'primary' || color === 'secondary' || color === 'dark' || color === 'success' || color === 'info' || color === 'warning' || color === 'danger'){
      return color;
  }
  return 'primary';
}