import React, { Component } from 'react';
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
      <div>
        <div className="categoriesList-wraper">
          { this.props.categories.reverse().map( ( cat, index ) =>
            <div href="#" key={ index } className="categoriesList"> 
              <Link
                to={{ 
                  pathname: "/editCategory",
                  state: {
                    categoryId : `${ cat.id }`,
                    categoryName: `${ cat.name }`,
                    createDate : `${ cat.createdAt }`,
                    lastUpdate : `${ cat.updatedAt }`,
                  }
                }} >
                <li  class="category-list-item">
                  <a>{ index + 1 } - { cat.name }<small> last update was: { cat.updatedAt }</small></a>
                </li>
              </Link>
            </div> ) }
        </div>
      </div>
    )
  }
}

export default AdminCategories;