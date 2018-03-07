import React, { Component } from 'react';
import '../styles/mainLayout.css';
import AdminLogin from './AdminLogin';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  routes from '../routes'

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
    this.setState( prevState => ( { navShow: !prevState.navShow }) );
  }

  logout () {
    localStorage.clear( 'token ');
  }
  
    render() {
      if ( this.props.auth === true ) {
        return (
          <div style={{color: '#288288'}}>
          <br/>
            <ul class="list-group ">
            { routes.map( path => 
              <Link
                to={ path.path } activeClassName="active">
                <li href="/home" class="list-group-item">
                <span className=" glyphicon glyphicon-user "> </span>
                <a href="" > {path.title} </a>
                </li>
              </Link>
            )}

            { !this.props.auth ? <li href="/" class="list-group-item"><a href="/login" > Login </a></li> 
            : <li onClick= { this.logout } href="/" class="list-group-item"><a href="/" > Logout </a></li>
          }
          </ul>
        </div> )
    }
    else {
      return ( <AdminLogin/> )
    }
  }
}

export default AdminNav;