import React,{FC,useState} from 'react'
import './SideBarHeader.css'

export interface SideBarHeaderProps {
  links : JSX.Element | JSX.Element[];
  color?: 'primary' | 'secondary' |'dark'|'success'|'info'|'warning'|'danger';
  legendNav? : String;
  className? : string;
  infoNav? : String;
  iconNav? : JSX.Element | JSX.Element[];
  children?: JSX.Element | JSX.Element[];
}

const name:string = 'SideBarHeader'

export const SideBarHeader: FC<SideBarHeaderProps> = ({color='primary',legendNav,iconNav,infoNav,links,children,className,...props}) => {
  const [open, setOpen] = useState(false)

  const handleResize = () => {
    if(window.innerWidth>768){
      setOpen(false)
    }else{
      setOpen(true)
    }
  }

  window.onresize = handleResize;

  const handleSidebar = () =>{
    setOpen(!open)
  }

  return (
    <div className='SideBarHear'>
      <div className={`header-${name} ${color && `${color}-${name}`} ${open && `close-header-${name}`} `}>
        <div className={`legend-nav-container-${name}`}>
            <div className={`legend-nav-${name}`}>
              {legendNav}
            </div>
            <div onClick={handleSidebar} className={`icon-${name}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
        </div>
        <div className={`nav-container-${name}`}>
          <div>{infoNav}</div>
          <div>{iconNav}</div>
        </div>
      </div>
      <div className={`container-${name} ${open && `close-container-${name}`}`}>
          <div className={`sidebar-${name} ${open && `close-sidebar-${name}`} `}>
              <div className={`line-${name}`}></div>
              <nav className={`links-${name}`}>
                {links}
              </nav>
          </div>
          <div className={`main-${name} ${open && `close-main-${name}`}`}>
              {children}
          </div>
      </div>
    </div>
  )
}