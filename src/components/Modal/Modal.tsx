import React, {FC, useState, useEffect} from 'react';
import CloseIcon from '../Alert/icons/CloseIcon'
import {ModalProps} from './Modal.interface';
import './Modal.css'
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
            <div className="modal-content">
              <div id='header'>
              <h2>{header}</h2>
                 {/* <span className="close">&times;</span> */}
                  <div onClick={closeModal}>
                    <CloseIcon />
                  </div>
              </div>

              {
                children
              }
             
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto omnis, a nesciunt iste voluptas tenetur perferendis illo impedit repudiandae neque magnam itaque fugit dolores labore eaque animi ipsam ad dicta.
                </div>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto omnis, a nesciunt iste voluptas tenetur perferendis illo impedit repudiandae neque magnam itaque fugit dolores labore eaque animi ipsam ad dicta.
                </div>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto omnis, a nesciunt iste voluptas tenetur perferendis illo impedit repudiandae neque magnam itaque fugit dolores labore eaque animi ipsam ad dicta.
                </div>
                
            </div>
          </div>
        )
      }
    </div>
   
  )
}

// sass src/components/Modal/Modal.scss src/components/Modal/Modal.css --watch --no-source-map