import React, { Component, Switch, Redirect } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, PageHeader, Panel, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class AdminDocument extends Component {
    constructor( props ){
        super ( props );
        this.props.history;
    this.state = {
        documents : [],
        auth: false

        }
    }


    componentDidMount() {
            fetch('https://api.staging.mieterengel.de/documents/categories', {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgsInJvbGUiOiJDVVNUT01FUiIsImlhdCI6MTUyMDI0Mjk2NSwiZXhwIjoxNTIwNDE1NzY1fQ.bPgOg2BL_JZ12rVPgLprXXsgFK_BTq8JBRFSkb0W7mA'
                }
            }).then((response) => response.json())
              .then((responseData) => {
                  this.setState({
                      documents: responseData.data
                  });
                  console.log(this.state.documents)
              })        
    }

    componentWillMount() {
        
    }
    

    render () {
        return (
            <ListGroup>
            {this.state.documents.map( (doc,index) =>
                <ListGroupItem href="#" key={index} className ='usersList'> 
                     {doc.id} 
                    -{doc.name}
                </ListGroupItem>)}
            </ListGroup>
        )
    }
};

export default AdminDocument