import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './assets/images/admin-logo.png';
import { Route, BrowserRouter } from 'react-router-dom';
import AdminNav from './Components/AdminNav';
import AdminDashBoard from './Components/AdminDashBoard';
import routes from './routes'
import './styles/mainLayout.css';
import './styles/App/App.css';
import './styles/App/sideBar.css';
import AdminHomePage from './Components/AdminHomePage';
import { connect } from 'react-redux';
import logo from './assets/images/mieterengel-logo.png';

  
class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      auth: null,
      userId: '',
      role: null,
    }
  }

componentWillMount() {
  const auth = localStorage.getItem( 'token' );
  if ( auth === 'true' ) {
    this.setState( {
      auth: true
    } )
  }
  else {
    this.setState( {
      auth: false
    } )
  }
}

componentDidMount() {
    console.log(' //USER Auth in APP// '+  this.props.auth ) 
  }

render() {
  const { auth } = this.props;
  return (     <BrowserRouter>
    <div className="app">   
          
             <div className=" sidebar ">
                  <div class=" logo-img--desktop "><img src={ logo } alt=" Logo "/></div>
                  <AdminNav auth={ this.props.auth }/>
             </div>
             
             <div className=" main-body " >
               <div className=" contnent-container " > 
                  <br/>
                  { auth ? <Route path="/" exact component={ AdminDashBoard }/> : <AdminHomePage/> }
                  { routes.map( ({ path, component:C }) => ( 
                      <Route
                      path= { path }
                      render = { ( props ) => <C {...props} auth= { this.props.auth }/> }
                      /> ) )
                  }
                </div>    
               </div>
      
      </div></BrowserRouter>
    )
  }
}

export default  App;