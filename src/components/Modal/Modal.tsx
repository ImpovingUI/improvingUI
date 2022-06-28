import React, {FC, useState, useEffect} from 'react';
import CloseIcon from '../Alert/icons/CloseIcon'
import {ModalProps} from './Modal.interface';
import './Modal.css'
import { validateInitProps } from './validation';
export const Modal: FC<ModalProps> = (
  {
    children,
    show = false,
    size = 'md',
    header='',
  }

) => {

  const [open, setOpen] = useState(show);
  const closeModal = () => {
    setOpen(false )
  }

  useEffect(() => {
    setOpen(show)
  }, [show])

  return (
    <div>
      
      {
        open && (
          <div id="myModal" className="modal">
            <div className = { `modal-content 
                                ${validateInitProps({size})}
                                `
                             }
            >
              <div id='header'>
                 <h2> { header } </h2>

                  <div onClick={ closeModal } className='close-btn'>
                    <CloseIcon />
                  </div>
              </div>
              
              <div className='content-body-modal'>

                { 
                    children 
                }

              </div>
            </div>
          </div>
        )
      }
    </div>
   
  )
}

// sass src/components/Modal/Modal.scss src/components/Modal/Modal.css --watch --no-source-map