import React, { Component } from 'react';
import {  ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DocumentsCategories extends Component {
    constructor ( props ) {
        super ( props )
    }

    componentWillMount() {
        if ( this.props.auth !== true ) {
          this.props.history.push( "/" );
        }
    }
 
    render () {
        return ( 
            <ListGroup>
                <h3> Documents categories </h3>
                { this.props.documents.map( ( doc, index ) =>
                    <ListGroupItem href=" # " key={ index } className =' usersList '> 
                    <Link
                        to={{ 
                            pathname: '/editCategory',
                            state: {
                                categoryId : `${ doc.id }`,
                                categoryName: `${ doc.name }`,
                            }
                        }} activeClassName=" active ">
                        <li href=" /home " class=" list-group-item ">
                        <span className=" glyphicon glyphicon-user "> </span>
                        <a href="" > { doc.id }  - { doc.name } </a>
                        </li>
                    </Link>
                </ListGroupItem> ) }
            </ListGroup>
        )
    }
}

export default DocumentsCategories;