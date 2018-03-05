import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './admin-logo.png';
import AdminHomePage from './components/AdminHomePage';

import { 
  Route, Redirect,
  BrowserRouter as Router, 
  Link } from 'react-router-dom';
  
  import AdminUsers from './components/AdminUsers';
  import AdminDocument from './components/documents';
  import AdminPosts from './components/AdminPosts';
  import AdminNav from './components/AdminNav';
  import AdminLogin from './components/AdminLogin';
  import AdminDashBoard from './components/AdminDashBoard';
  import AdminTodo from './components/AdminTodo';
  import routes from './routes';
  import { connect } from 'react-redux';
  import './components/adminNavStyle.css';
  import { userLoggedIn, userNotLoggedIn } from './actions'
  

class App extends Component {
  constructor( props ){
    super( props );
  this.store= this.props.store;
  }

componentWillMount() {
  console.log( this.store.getState() );
  this.store.dispatch( userLoggedIn())

    if (this.auth === 'true' ){
      console.log('congrats you have logged in ')
      this.setState({
        auth: true
      })
    }
    else {
      console.log('please log in to continue')
      this.setState({
        auth: false
      })
    }
}

// Component did  mount 
  componentDidMount() {} 
  
render() {
  return (
    
          <Grid fluid={ true } >
              <Row>
                  <Col md={ 3 } xsHidden={ true } className='sideMenu text-center'>
                  <img width='50%' src='http://www.mieterengel.de/wp-content/uploads/2018/02/Screen-Shot-2018-02-12-at-11.58.52-AM.png'/>
                  <AdminNav xsHidden={ true } className='sideMenu text-left'/>
                    </Col>
                  <Col md={ 9 }> 
                  <br/>
                    <Route path="/"
                      render = { (props)=> <AdminDashBoard {...props} auth= {this.props.auth}/>}
                     />

                    { routes.map( ({ path, component:C })=> ( 
                      <Route
                      path= { path }
                      render = { (props)=> <C {...props} auth= {this.state.auth}/>}
                      />
                    ))}    

                  </Col>
              </Row>
          </Grid>
          
    );
  }
}


export default App;