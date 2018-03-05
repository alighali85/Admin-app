import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './adminNavStyle.css';
import { Navbar, NavItem, Grid, Button } from 'react-bootstrap';


class AdminNav extends Component {
  constructor(props) {
    super( props );
    this.state = {
      navShow: true,
    };

    this.toogleNav = this.toogleNav.bind(this);
  }
  toogleNav() {
    this.setState( prevState => ({ navShow: !prevState.navShow }) );
  }
  
    render() {
      if (this.state.navShow){
        return (
          <div style={{color: '#288288'}}>
          <br/>
            <ul class="list-group ">
            <li href="/" class="list-group-item"><a href="/" > Home </a></li>
            <li href="/" class="list-group-item"><a href="/users" > Users </a></li>
            <li href="/" class="list-group-item"><a href="/documents" > Documents </a></li>
            <li href="/" class="list-group-item"><a href="/todo" > Todo List </a></li>
            <li href="/" class="list-group-item"><a href="/login" > Login </a></li>
          </ul>
        </div> )
    }
}
}




export default AdminNav;