import React, { Component } from 'react';
import DocumentsCategories from '../../Components/AdminDocuments/DocumentsCategories'
import EditeCaterory from '../../Components/AdminDocuments/EditCategory';
import { Route } from 'react-router-dom'

class Categories extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            documents : []
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
          console.log( " document container props "+ this.props.auth )   
}

    componentWillMount() {
        if ( this.props.auth !== true ){
        this.props.history.push("/");
        }
    }

render () {
        return (
            <div> 
            
            <DocumentsCategories
             auth = { this.props.auth } 
             history = {this.props.history }
             documents= { this.state.documents }
             />
             </div>
        )
    }
}

export default Categories
