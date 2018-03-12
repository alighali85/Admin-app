import React, { Component } from 'react';
import '../../styles/mainLayout.css';
import AdminLogin from '../AdminLogin/AdminLogin';
import { Link } from 'react-router-dom';
import  routes from '../../routes';
import '../../styles/App/sideBar.css';


class AdminNav extends Component {
  constructor( props ) {
    super( props );
  }

  activeLink = ( event ) => {
    event.target.style.color = "rgb(225,225,225)"
    console.log( event.target.style.color )
  }

  logout() {
    localStorage.clear( 'token' );
  }

  render() {
    if ( this.props.auth === true ) {
      return (
        <div> <br/>
          <ul className="sidebar-menu">
            { routes.filter( path => path.directAccess == true )
            .map( path => 
              <Link
                to={ path.path }>
                <li className="sidebar-menu-li">
                  <a href="" onClick={ this.activeLink }>{ path.title }</a>
                </li>
              </Link>
            )}
          </ul>

          { !this.props.auth ? <li> <a href="/login " > Login </a> </li> 
            : <a onClick={ this.logout } href="/" className="logOutButton"> Logout </a>
          }

        </div>
      )
    }
    else {
      return ( <AdminLogin/> )
    }
  }
}

export default AdminNav;