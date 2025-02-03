import React from 'react'
import "./Sidebar.css"
import Logo from "../../assets/logo.svg"
const Sidebar = () => {
  return (
    <>    <aside className='aside'>
      <a href='#home' className="nav__logo">
        
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home" title="Home"></i>
                  
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following" title="About"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation" title="Education"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="icon-briefcase" title="Portfolio"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#certifications" className="nav__link">
                  <i className="icon-layers" title="Certifications and Achievements"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble" title="Contact"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2024</span>
        </div>

        
      
    </aside>
    <div className="nav__toggle">
    <i className="icon-menu">
      
    </i>
  </div>
  </>
  
  )
}

export default Sidebar
