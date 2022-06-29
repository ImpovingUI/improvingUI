// TODO: Add option for closing modal if the user click out of modal (props)
// TODO: Add animation when the modal is opened
// TODO: Add animation when the modal is closed
import React, { FC, useState, useEffect } from 'react';
import CloseIcon from '../Alert/icons/CloseIcon'
import { ModalProps } from './Modal.interface';
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
  }, [show]);

  /* This event is for closing the modal with the btn ESC */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  })

  return (
    <div>
      
      {
        open && (
          <div className="modal">
            <div onClick={ e => e.stopPropagation() } 
                                className = { `modal-content            
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
                { /* 
                    In this section must insert a div with id="body" 
                    and another div with id="footer", this into the children 
                */}
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