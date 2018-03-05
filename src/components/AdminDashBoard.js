import React, { Component } from 'react';
import { Route , BrowserRouter } from 'react-router-dom';
import { Grid, Row, Col, Navbar, Jumbotron, Button } from 'react-bootstrap';
import AdminNav from './AdminNav';
import './adminNavStyle.css';
import { userNotLoggedIn } from '../actions/index';



class AdminDashBoard extends Component {
    constructor(props ) {
        super(props);
        this.store= this.props.store;
    }
logMeout =()=> {

    this.store.dispatch( userNotLoggedIn)

}
    render() {
        return(
            <Grid>
                <Row>
                <Col md={ 12 } >
                    <Jumbotron>
                    <h1>Welcome to Admin App!</h1>
                    
                    <p>
                        here you can finde over view about the last activities on your app
                    </p>
                    <p>
                        <Button onClick={ this.logMeout } bsStyle="primary" style={{background:'#288288', border: 'none'}}>Log out </Button>
                    </p>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col md={ 6 }>
                <Jumbotron>
                    <h1>Users!</h1>
                    <p>
                        here you can finde over view about the last activities on your app
                    </p>
                    <p>
                        <Button bsStyle="primary" style={{background:'#288288', border: 'none'}}>Learn more</Button>
                    </p>
                    </Jumbotron>
                </Col>

                <Col md={ 6 }>
                <Jumbotron>
                    <h1>Activities </h1>
                    <p>
                        here you can finde over view about the last activities on your app
                    </p>
                    <p>
                        <Button bsStyle="primary" style={{background:'#288288', border: 'none'}}>Learn more</Button>
                    </p>
                    </Jumbotron>
                </Col>

            </Row>

            <Row>
                <Col md={ 6 }>
                <Jumbotron>
                    <h1>Documents center{this.element}</h1>
                    <p>
                        here you can finde over view about the last activities on your app
                    </p>
                    <p>
                        <Button bsStyle="primary" style={{background:'#288288', border: 'none'}}>Learn more</Button>
                    </p>
                    </Jumbotron>
                </Col>

                <Col md={ 6 }>
                <Jumbotron>
                    <h1> Services</h1>
                    <p>
                        here you can finde over view about the last activities on your app
                    </p>
                    <p>
                        <Button bsStyle="primary" style={{background:'#288288', border: 'none'}}>Learn more</Button>
                    </p>
                    </Jumbotron>
                </Col>

            </Row>
                
            </Grid>
               )
            }
    };

    
           
export default AdminDashBoard;