import React, { FC } from 'react'

export interface AlertProps  {
     show: boolean,
     type: 'success' | 'error' | 'warning' | 'info',
     filled: boolean,
     closeAutomatic: boolean,
     timeOut?: number,
     message: string,
     tittle?: string,
     fullWidth?: boolean,
     position: 'top' | 'bottom' | 'left' | 'right',
     icon?: FC | string
}


export const Alert: FC<AlertProps> = ( {
     show = true,
     type= 'success',
     filled=true,
     closeAutomatic= true,
     timeOut= 3000,
     message= '',
     tittle= '',
     fullWidth= false,
     position='right'
 } ) => {

  return (
    <div>Alert</div>
  )

}
