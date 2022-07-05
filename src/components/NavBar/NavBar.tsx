import React, {FC,useState} from 'react'
import './NavBar.css'

export interface NavBarProps {
    position?: 'sticky' | 'fixed' | 'static'; 
    color?: 'primary' | 'secondary' |'dark'|'success'|'info'|'warning'|'danger';
    shadow? : boolean;
    iconNav? : string;
    iconSide? : string;
    className? : string;
    children?: JSX.Element | JSX.Element[];
}

let name:string='NavBar'

export const NavBar: FC<NavBarProps> = ({position="static",color="primary",shadow,iconSide="Menu",iconNav,className,children,...props}) => {
  const [open, setOpen] = useState(false)

  const handleResize = () => {
    if(window.innerWidth<768){
      setOpen(false)
    }
  }

  window.onresize = handleResize;
  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape'){
      setOpen(false)
    }
  })

  const handleSidebar = () =>{
    setOpen(!open)
  }
  
  return (
    <>
      <div className={`default-${name} 
      ${position}-${name}
      ${color}-${name}
      ${shadow ? `shadow-${name}`: ''}
      ${className}
      `}
      {...props}
      >
          <div onClick={handleSidebar} className='icon-NavBar'>
            <div className='icon-div-NavBar'></div>
            <div className='icon-div-NavBar'></div>
            <div className='icon-div-NavBar'></div>
          </div>
          <div className={`contained-NavBar`}>
            {children}
          </div>
          <div className={`icon-right-${name}`}>
              {iconNav}
          </div>
      </div>
      {/* sidebar */}
      <div onClick={handleSidebar} className={`side-bar-NavBar ${open && `open-${name}`}`}>
        <div onClick={e=>e.stopPropagation()} className={`side-bar-body-${color}-${name} ${open && `open-side-bar-${name}`}`}>
          <div className={`side-bar-header-${name}`}>
            {iconSide}
            <span onClick={handleSidebar} className={`close-button-${name}`}>X</span>
          </div>
          <div className={`hr-container-${name}`}>
            <hr className={`hr-${name}`}/>
          </div>
          <div className={`side-bar-link-${name}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
