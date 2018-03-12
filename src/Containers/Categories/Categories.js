import React, { Component } from 'react';
import AdminCategories from '../../Components/AdminCategories/AdminCategories';


class Categories extends Component {
    constructor( props ) {
      super( props );
      this.state = {
        categories : [],
        reload: true,
      }
    }

    getCategories = () => {
      fetch( 'https://api.staging.mieterengel.de/documents/categories', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':  `Bearer ${localStorage.getItem( 'token' )}`
        }
      }).then( response => response.json() )
          .then( responseData => {
            this.setState({
              categories: responseData.data
            });
          })  
    }

    componentWillMount() {
      if ( this.props.auth !== true ) {
        this.props.history.push( "/" );
      }
      else {
        this.getCategories();
      }
    }

    render() {
      return(
        <div>
          <h2 class="heading-1 page-title">All Categories</h2> 
          <p>
            <button onClick={ this.getCategories }>Update { this.state.categories.length }</button>
          </p>
          <AdminCategories
          auth = { this.props.auth } 
          history = {this.props.history }
          categories= { this.state.categories }
          />
        </div>
      )
    }
}

export default Categories;