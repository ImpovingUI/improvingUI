{/*
  TODO: Progress bar
  TODO: Optimize use of alert with a prop "config"
  TODO: Changing Icon by Props
*/}

import React, { FC, useLayoutEffect } from "react";
import { AlertProps } from './Alert.interface';
import "./Alert.css";
import CloseIcon from "./icons/CloseIcon";
import { validateInitProps, validateIcon } from "./validation";

export const Alert: FC<AlertProps> = ( {
    show = false,
    variant = 'success',
    filled = true,
    closeAutomatic = true,
    timeOut = 3000,
    message = "",
    tittle = "",
    position = "top-right",
    Icon = validateIcon(variant),
    config,
    handleClose
} ) => {
  

  const alertRef = React.useRef<HTMLDivElement>(null);

  const closeAlert = () =>{
    
    if ( position.includes("left") ) {
        alertRef.current?.classList.remove('animate__fadeInLeft');
        alertRef.current?.classList.add("animate__backOutLeft");
    }
      
    if ( position.includes("right") ) {
        alertRef.current?.classList.remove('animate__fadeInRight');
        alertRef.current?.classList.add('animate__backOutRight');
    }
      
    handleClose( false );

  }

  useLayoutEffect(() => {

    if (!show) return;

    // Add animate class to alert dependent on the position of the alert 
    if ( !position.includes('left') && !position.includes('right') )
        position = 'top-right'

    if ( position.includes('left') )
      alertRef.current?.classList.add('animate__fadeInLeft');

    if ( position.includes('right') )
      alertRef.current?.classList.add('animate__fadeInRight');

    if( !closeAutomatic ) return;

    setTimeout(() => {

      // Add animate class for hide the alert dependent on position of the alert
      if ( position.includes('left') ) {
        alertRef.current?.classList.remove('animate__fadeInLeft');
        alertRef.current?.classList.add('hide-left');
      }
        

      if (position.includes('right')) {
        alertRef.current?.classList.remove('animate__fadeInRight');
        alertRef.current?.classList.add('hide-right');
      }

      // Romeving the class for closing the alert
      setTimeout( () => {
        if ( position.includes('left') )
          alertRef.current?.classList.remove('hide-left');

        if (position.includes('right'))
          alertRef.current?.classList.remove('hide-right');

        handleClose( false );

      }, timeOut );

    }, timeOut);

  });

  return (
    <div>
      { show && (
        <div
          ref={alertRef}
          className={`alert
                      showAlert 
                      animate__animated 
                      ${ validateInitProps( { position, variant } ) }   
                      ${ filled ? 'filled' : 'outlined'} `}
        >
        {/* Alert Body */}
          <Icon />

          {/*The message and de button close is in this DIV*/}
          <div className='div-text-close'>
            <div>
              <p className='title'>{tittle}</p>
              <p className='message'> {message} </p>
            </div>

            { !closeAutomatic && (
              /* Button for closing the alert */
              <div onClick={() => closeAlert()} className='icon-close'>
                <CloseIcon />
              </div>
            
            )}

          </div>

          {/* TODO: Progress bar */}
          {/*<progress style={{display: 'block'}} max='100' value='90'> 70% </progress>*/}
        
        </div>
      )}
            
    </div>
  );
};
