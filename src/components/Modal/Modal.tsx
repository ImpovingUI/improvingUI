import React, {FC, useState, useEffect, useLayoutEffect, useRef} from 'react';
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
  const modalRef = React.useRef<HTMLDivElement>(null);
  const closeModal = () => {
    setOpen(false )
  }

  useEffect(() => {
    setOpen(show)
  }, [show]);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  })

  

  return (
    <div>
      
      {
        open && (
          <div id="myModal" className="modal">
            <div onClick={ e => e.stopPropagation() } className = { `modal-content            
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