{/*
  TODO: Progress bar
  TODO: Optimize use of alert with a prop "config"
  TODO: Changing Icon by Props
*/}

import React, { FC, useEffect,} from "react";
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
  const timer1 = React.useRef<any>();
  const timer2 = React.useRef<any>();
  const timer3 = React.useRef<any>();

  /*
    This function is for the alert has not close automatic
  */
  const closeAlert = () =>{
    
    if ( position.includes("left") ) {
        alertRef.current?.classList.remove('animate__fadeInLeft');
        alertRef.current?.classList.add("animate__backOutLeft");
    }
      
    if ( position.includes("right") ) {
        alertRef.current?.classList.remove('animate__fadeInRight');
        alertRef.current?.classList.add('animate__backOutRight');
    }

    setTimeout(() => {
      handleClose( false );
    }, 1000 );
      
  }

  /* This function is for giving animation to the alert with the time out */
  const animationTimer = () => {
    timer1.current = setTimeout(() => {

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
      timer2.current = setTimeout( () => {
        if ( position.includes('left') )
          alertRef.current?.classList.remove('hide-left');

        if (position.includes('right'))
          alertRef.current?.classList.remove('hide-right');

        alertRef.current?.classList.add('hide-alert-with-show-improving-ui');
        handleClose( false );

      }, (timeOut - 500 ) );

    }, timeOut);
  }

  /* This efect is when the states of alert change */
  useEffect(() => {
    
    if( !show ) return alertRef.current?.classList.add('hide-alert-with-show-improving-ui');

    if( alertRef.current?.classList.contains('hide-alert-with-show-improving-ui') ) alertRef.current?.classList.remove('hide-alert-with-show-improving-ui');
    
    // Add animate class to alert dependent on the position of the alert 
    if ( !position.includes('left') && !position.includes('right') )
        position = 'top-right'

    if ( position.includes('left') ) {
      alertRef.current?.classList.add('animate__fadeInLeft');
    }

    if ( position.includes('right') ) {
      alertRef.current?.classList.add('animate__fadeInRight');
    }   

    if( !closeAutomatic ) return;

    animationTimer();
    
    return () => {
      clearTimeout( timer1.current );
      clearTimeout( timer2.current );
    }
  }, [variant, message, show]);


  /* 
      This effect is when there is a alert in the dom, so, it cleans the time out for adding other alert with the new state 
  */
  useEffect(() => {
  
    if (!show) return;

    clearTimeout( timer1.current );
    clearTimeout( timer2.current );
    alertRef.current?.classList.add('hide-alert-with-show-improving-ui');

    if ( position.includes('left') ) 
      alertRef.current?.classList.remove('animate__fadeInLeft');

    if ( position.includes('right') ) 
      alertRef.current?.classList.remove('animate__fadeInRight');

    // This timer is for giving to the alert the fade animation again 
    timer3.current = setTimeout(() => {
      
      alertRef.current?.classList.remove('hide-alert-with-show-improving-ui');
      
      if ( position.includes('left') ) {
        alertRef.current?.classList.remove('hide-left');
        alertRef.current?.classList.add('animate__fadeInLeft');
      }
  
      if ( position.includes('right') ) {
        alertRef.current?.classList.remove('hide-right');
        alertRef.current?.classList.add('animate__fadeInRight');
      }

      animationTimer();

    }, 100)
    
    return () => {
       clearTimeout( timer3.current );
    }
      
  }, [timer1.current])

  return (
    <>
        <div
          ref={alertRef}
          className={`alert
                      showAlert 
                      animate__animated 
                      ${ validateInitProps( { position, variant } ) }   
                      ${ filled ? 'filled' : 'outlined'} 
                      hide-alert-with-show-improving-ui
                      `}
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
    </>
  );
};
