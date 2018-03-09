import React, { Component } from 'react';
import AdminCategories from '../../Components/AdminDocuments/AdminCategories';
import { Route } from 'react-router-dom';
import documentCategoryIcon from '../../assets/images/documentIcon.png'

class Categories extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            categories : [],
            reload: true,
         }
    }

    getCategories = ( ) => {
        fetch( 'https://api.staging.mieterengel.de/documents/categories', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization':  `Bearer ${ localStorage.getItem( 'token' ) }`
            }
        } ).then(  response  => response.json() )
           .then(  responseData  => {
              this.setState( {
                categories: responseData.data
              } );
          })  
    }

    componentDidMount() {
}

    componentWillMount() {
      
        if ( this.props.auth !== true ) {
             this.props.history.push( "/" );
        } else {
            this.getCategories();
        }
    }

    render() {
        return (
            <div> 
              <p> 
                  <h3><img width=" 64 "  width=" 64 " src={ documentCategoryIcon }/>
                     Documents categories </h3> <button onClick= { this.getCategories }> Update { this.state.categories.length } </button> </p>
                   <br/><br/>
            <AdminCategories
             auth = { this.props.auth } 
             history = {this.props.history }
             categories= { this.state.categories }
             />
             </div>
        )
    }
}

export default Categories
