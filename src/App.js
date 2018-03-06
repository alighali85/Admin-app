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
  import  { Provider }   from 'react-redux';
  import routes from './routes'
  import './components/adminNavStyle.css';
  

class App extends Component {
  constructor( props ){
    super( props );
    this.state = {
      auth: 'user not logged in ',
      userId: '',
      token: 'rewtettwe'
    }
  }
componentWillMount() {
  const auth = localStorage.getItem('token');
if (auth === 'true '){
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

  componentDidMount() {
    
  }
  
render() {
  return (
    <Provider store= { this.store }> 
          <Grid fluid={ true } >
              <Row>
                  <Col md={ 3 } xsHidden={ true } className='sideMenu text-center'>
                  <img width='50%' src='http://www.mieterengel.de/wp-content/uploads/2018/02/Screen-Shot-2018-02-12-at-11.58.52-AM.png'/>
                  <AdminNav xsHidden={ true } className='sideMenu text-left'/>
                    </Col>
                  <Col md={ 9 }> 
                  <br/>
                    <Route path="/" exact component={ AdminDashBoard } />

                    { routes.map( ({ path, component:C })=> ( 
                      <Route
                      path= { path }
                      render = { (props)=> <C {...props} auth= {this.state.auth}/>}
                      />
                    ))}    

                  </Col>
              </Row>
          </Grid>
    </Provider>
          
    );
  }
}


export default App ;