import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './admin-logo.png';

import { Route, BrowserRouter } from 'react-router-dom';
  
  import AdminNav from './components/AdminNav';
  import AdminDashBoard from './components/AdminDashBoard';
  import routes from './routes'
  import './components/adminNavStyle.css';
import AdminHomePage from './components/AdminHomePage';
import { connect } from 'react-redux';
  

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      auth: null,
      userId: '',
    }
  }
componentWillMount() {
  const auth = localStorage.getItem('token');
  if (auth === 'true ') {
    this.setState({
      auth: true
    })
  }
  else {
    this.setState({
      auth: false
    })
  }
}
  componentDidMount() {
    console.log('USER ID APP// '+  this.props.auth ) 
  }

  
render() {
  const { auth } = this.props;
  return (        
          <BrowserRouter>
            <Grid fluid={ true } >
              <Row>
                  <Col md={ 3 } xsHidden={ true } className='sideMenu text-center'>
                  <img alt="" width='50%' src='http://www.mieterengel.de/wp-content/uploads/2018/02/Screen-Shot-2018-02-12-at-11.58.52-AM.png'/>
                  <AdminNav auth= {this.props.auth} className='sideMenu text-left'/>
                    </Col>
                  <Col md={ 9 }> 
                  <br/>
                  { auth ? <Route path="/" exact component={ AdminDashBoard } /> : <AdminHomePage/>}
                    
                    { routes.map( ({ path, component:C })=> ( 
                      <Route
                      path= { path }
                      render = { (props)=> <C {...props} auth= {this.props.auth}/>}
                      />
                    ))}    
                  </Col>
              </Row>
          </Grid>
      </BrowserRouter>
    );
  }
}



export default  App  ;