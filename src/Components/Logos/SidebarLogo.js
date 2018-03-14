import React    from 'react';
import logo     from '../../assets/images/mieterengel-logo@3x.png';
import './style.scss'

const SidebarLogo = () => {
  return (
    <div className="sidebar__logo">

      <div
        to="/"
        className="sidebar__logo-img"
      >
        <div className="sidebar__logo-img--desktop">
          <img src={logo} alt="Logo"/>
        </div>
        <div className="sidebar__logo-img--mobile"></div>
      </div>

    </div>
  
  )
};

export default SidebarLogo;