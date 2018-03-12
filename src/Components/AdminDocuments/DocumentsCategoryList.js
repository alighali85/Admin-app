import React, { Component } from 'react';
import '../../styles/documents/documentList.css';


class DocumentsCategoryList extends Component {
  constructor( props ) {
    super ( props );
  }

  render() {
    const { documents, categoryName } = this.props;
    return (
      <div>
        <div className="documentsList--wraper"> 
          <h3 className="heading-1 page-title">{ categoryName }</h3>
          <ul className="list-group">          
          { documents.map( ( doc, index ) => 
            <li className="list-group-item">
              <span className="list-item-id">{ index + 1 }</span>
              <h4 className="list-item-name">{ doc.name }</h4>
            </li> )
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default DocumentsCategoryList;
