import React, { Component } from 'react';
import './adminNavStyle.css';
import AdminLogin from './AdminLogin';
import { Glyphicon } from 'react-bootstrap';

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

            <li href="/" class="list-group-item">
            <Glyphicon glyph="star" />
              <a href="/" > Home </a>
            </li>

            <li href="/" class="list-group-item">
            <span className=" glyphicon glyphicon-user "> </span>
            <a href="/users" > Users </a>
            </li>

            <li href="/" class="list-group-item">
            <span className=" glyphicon glyphicon-file "> </span>
            <a href="/documents" > Documents </a>
            </li>

            <li href="/" class="list-group-item">
            <span className=" glyphicon glyphicon-th-list "> </span>
            <a href="/todo" > Todo List </a>
            </li>

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