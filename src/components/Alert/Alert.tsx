import React, { FC, useLayoutEffect  } from 'react'
import './Alert.css'

export interface AlertProps  {
     show: boolean,
     variant: 'success' | 'error' | 'warning' | 'info',
     filled: boolean,
     closeAutomatic: boolean,
     timeOut?: number,
     message: string,
     tittle?: string,
     position: 'top' | 'bottom' | 'left' | 'right',
     icon?: FC | string
}

export const Alert: FC<AlertProps> = ( {
     show = true,
     variant= 'success',
     filled=true,
     closeAutomatic= true,
     timeOut= 3000,
     message= '',
     tittle= '',
     position='right'
 } ) => {

  const alertRef = React.useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    if( !show )
      return ;

    setTimeout(() => {
      alertRef.current?.classList.add('hide');

    }, timeOut)


  })
 
  return (
    <div>
      {
        show && (
          <div ref={alertRef}
               /* List of classes */ 
               className={`alert 
                           showAlert 
                           animate__animated 
                           animate__fadeInRight 
                           ${variant} 
                           ${ filled ? 'filled' : 'outline' }`
                          }
          >
             { message }
          
          </div>
        )
      }
    </div>
  )

}
