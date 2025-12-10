import React, { useState } from 'react';
import "./Sidebar.css";

const navItems = [
  { href: "#home", icon: "icon-home", title: "Home" },
  { href: "#about", icon: "icon-user-following", title: "About" },
  { href: "#resume", icon: "icon-graduation", title: "Education" },
  { href: "#experience", icon: "icon-organization", title: "Experience" },
  { href: "#work", icon: "icon-screen-desktop", title: "Projects" },
  { href: "#certifications", icon: "icon-layers", title: "Certifications & Achievements" },
  { href: "#contact", icon: "icon-bubble", title: "Contact" },
];

const Sidebar = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const showTooltip = (index) => {
    setActiveTooltip(index);
    setTimeout(() => {
      setActiveTooltip(null);
    }, 2000); // Hide after 2s
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
 


  return (
    <>
      <aside className='aside'>
        <a href='#home' className="nav__logo"></a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              {navItems.map((item, index) => (
                <li key={index} className="nav__item" onClick={() => showTooltip(index)}>
                  <a href={item.href} className="nav__link">
                    <i className={item.icon}></i>
                    <span className={`tooltip ${activeTooltip === index ? "show" : ""}`}>
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      <div className="nav__toggle">
        <i className="icon-menu" onClick={toggleSidebar}></i>
      </div>
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`} >
        <nav className="nav">
          <ul className="nav__list">
            <i className="icon-arrow-left" onClick={toggleSidebar}></i>
            {navItems.map((item, index) => (
              <li key={index}>
                
                <a href={item.href} >
                  <i className={item.icon}></i> {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;



