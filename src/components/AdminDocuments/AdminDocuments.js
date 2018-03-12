import React, { Component } from 'react';
import '../../styles/documents/documentList.css';
import { Link } from 'react-router-dom';


class AdminDocuments extends Component {
  constructor( props ) {
    super ( props );
    this.state = {
      documentsList: this.props.ddocuments
    }
  }

  render() {
    const { documents } = this.props;
    return (
      <div>
        <div className="documentsList--wraper"> 
          <h2 className="heading-1 page-title">All Documents</h2>
            <ul className="list-group">
              { documents.map( ( doc, index ) => 
                <li  className="list-group-item">
                <div>
                <span className="list-item-id">{ doc.id }</span>
                  <h4 className="list-item-name">{ doc.name }</h4>
                  <button onClick={ this.deleteDocument } key={ doc.id }> delete</button>
                </div> <hr/>
                  
                  <h6 >                    
                    { doc.categories.map( cat => 
                      <p>
                        <Link className="list-item-categories"
                          to={{
                            pathname: `/documents-by-category/${ cat.id }`,
                            state: {
                              categoryName: `${ cat.name }`
                            }
                          }} 
                        >{ cat.name }</Link>
                      </p> 
                    ) }
                  </h6>
                </li> )
              }
            </ul>
        </div>
      </div>
      )
    }
}

export default AdminDocuments;
