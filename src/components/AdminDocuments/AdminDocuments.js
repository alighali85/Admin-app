import React, { Component } from 'react';
import '../../styles/documents/documentList.css';


class AdminDocuments extends Component {
    constructor( props ) {
         super ( props );
         this.state= {
            documentsList: this.props.ddocuments
         }
    }
    render() {
        const { documents } = this.props;
        return (
            <div>
                <div className="documentsList--wraper"> 
                    <h2 className="heading-1 page-title"> All Documents </h2>
                    <ul className="list-group">
                    { documents.map( ( doc, index ) => 
                        <li  className="list-group-item">
                        <span className="list-item-id"> { doc.id } </span>
                        <h4 className="list-item-name"> { doc.name}  </h4> 
                        <br/> <br/> 
                        <h6 > 
                        { doc.categories.map( cat => <p className="list-item-categories"> { cat.name } </p> ) }
                        </h6>
                        </li> )
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default AdminDocuments
