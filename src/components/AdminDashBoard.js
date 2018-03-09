import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import '../styles/mainLayout.css';


class AdminDashBoard extends Component {
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
                        <Button bsStyle="primary" style={{background:'#288288', border: 'none'}}>Learn more</Button>
                    </p>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col md={ 6 }>
                <Jumbotron>
                    <h1>Categories {this.element}</h1>
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
                    <h1> Documents </h1>
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