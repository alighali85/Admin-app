import React, { Component } from 'react'
import './style.scss'
import SidebarLogo from '../../Components/Logos/SidebarLogo';


class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: true
    }
  }
  render() {
    return (
      <aside className="sidebar">
      <div className="sidebar__top">
          <SidebarLogo />

          <div className="sidebar__button-menu">
            <span> Side bar top </span>
            
          </div>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-menu">
            <ul>
              <li>list item </li>
              <li>list item </li>
              <li>list item </li>
              <li>list item </li>
            </ul>
          </nav>

          <div className='sidebar__buttons-wrapper'>
            <button  className='sidebar__button-logout'>Log out</button>
          </div>
        </div> 
      </aside>
    )
  }
}

export default Sidebar;