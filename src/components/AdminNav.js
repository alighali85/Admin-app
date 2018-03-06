import React, { Component } from 'react';
import './adminNavStyle.css';
import AdminLogin from './AdminLogin';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminNav extends Component {
  constructor(props) {
    super( props );
    this.state = {
      navShow: true,
    };

    this.toogleNav = this.toogleNav.bind(this);
    this.logout = this.logout.bind(this);
  }
  toogleNav() {
    this.setState( prevState => ({ navShow: !prevState.navShow }) );
  }

  logout () {
    localStorage.clear( 'token ');
  }
  
    render() {
      if (this.props.auth === true ){
        return (
          <div style={{color: '#288288'}}>
          <br/>
            <ul class="list-group ">

            <Link to={'./home'} activeClassName="active">
            <li href="/home" class="list-group-item">
            <span className=" glyphicon glyphicon-user "> </span>
            <a href="" > Home </a>
            </li>
            </Link>

            <Link to={'./users'} activeClassName="active">
            <li href="/users" class="list-group-item">
            <span className=" glyphicon glyphicon-user "> </span>
            <a href="" > Users </a>
            </li>
            </Link>

            <Link to={'./documents'} activeClassName="active">
            <li href="/" class="list-group-item">
            <span className=" glyphicon glyphicon-user "> </span>
            <a href="" > Documents </a>
            </li>
            </Link>
            
            <Link to={'./todo'} activeClassName="active">
            <li href="/" class="list-group-item">
            <span className=" glyphicon glyphicon-user "> </span>
            <a href="" > todo List </a>
            </li>
            </Link>

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