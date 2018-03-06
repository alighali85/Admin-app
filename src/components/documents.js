import React, { Component } from 'react';
import {  ListGroup, ListGroupItem } from 'react-bootstrap';
import {  Switch, Redirect } from 'react-router-dom';

class AdminDocument extends Component {
    constructor( props ){
        super ( props );
        this.state = {
        documents : [],
        auth: null
        }
    }


    componentDidMount() {
            fetch('https://api.staging.mieterengel.de/documents/categories', {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization':  `Bearer ${localStorage.getItem('token')}`
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
        if ( this.props.auth !== true ){
          this.props.history.push("/");
        }
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