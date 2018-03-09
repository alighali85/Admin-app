import React, { Component } from 'react';
import '../styles/mainLayout.css';
import AdminLogin from './AdminLogin';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  routes from '../routes';
import './../styles/App/sideBar.css';

class AdminNav extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      navShow: true,
    };

    this.toogleNav = this.toogleNav.bind( this );
    this.logout = this.logout.bind( this );
  }
  toogleNav() {
    this.setState( prevState => ( { navShow: !prevState.navShow } ) );
  }

  logout () {
    localStorage.clear( 'token ');
  }
  
    render() {
      if ( this.props.auth === true ) {
        return (
          <div style={ {color: '#288288'} } className="">
          <br/>
            <ul className="sidebar-menu">
            { routes.filter( path => path.directAccess == true )
              .map( path => 
              <Link
                to={ path.path } activeClassName=" active ">
                <li href=" /home " className="sidebar-menu-li">
                <a href="" > { path.title } </a>
                </li>
              </Link>
            )}

            
          </ul>
          { !this.props.auth ? <li href="/" className=" "><a href=" /login " > Login </a></li> 
            : <a onClick={ this.logout } href=" / " className=" logOutButton " > Logout </a>
          }
        </div> )
    }
    else {
      return ( <AdminLogin/> )
    }
  }
}

export default AdminNav;