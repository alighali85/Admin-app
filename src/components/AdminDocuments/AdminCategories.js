import React, { Component } from 'react';
import {  ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  '../../styles/category/allCategories.css';


class AdminCategories extends Component {
  constructor ( props ) {
    super ( props );
      this.state = {
      }
    }

  componentWillMount() {
    if ( this.props.auth !== true ) {
      this.props.history.push("/");
      }
    }
 
  render () {
    return ( 
      <ListGroup>
        { this.props.categories.reverse().map( ( cat, index ) =>
          <ListGroupItem href="#" key={ index } className="usersList"> 
            <Link
              to={{ 
                pathname: "/editCategory",
                state: {
                  categoryId : `${ cat.id }`,
                  categoryName: `${ cat.name }`,
                  createDate : `${ cat.createdAt }`,
                  lastUpdate : `${ cat.updatedAt }`,
                }
              }} activeClassName="active">
              <li  class="category-list-item">
              <a>{ index + 1 } - { cat.name }<small> last update was: { cat.updatedAt }</small></a>
              </li>.
            </Link>
          </ListGroupItem> ) }
      </ListGroup>
    )
  }
}

export default AdminCategories;