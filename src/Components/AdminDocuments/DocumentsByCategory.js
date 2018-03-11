import React, { Component } from 'react';
import '../../styles/documents/documentList.css';
import { documentsEndPoint } from '../../auth/utils/api';


class DocumentsByCategory extends Component {
  constructor( props ) {
    super ( props );
      this.state= {
        documentsList: []
      }
  }

  getDocuments = () => {
    fetch( documentsEndPoint , {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':  `Bearer ${ localStorage.getItem( 'token' ) }`
      }
    }).then( response => response.json() )
        .then(  responseData => {
          this.setState( {
            documentsList: responseData.data
          });
      });
      console.log( '/// Documents by Categroies  ' + this.state.documentsList )
  }

  componentWillMount() { 
    this.getDocuments();
  }

    render() {
      const { documentsList } = this.state;
      return (
        <div>
          <div className="documentsList--wraper"> 
            <h2 className="heading-1 page-title"> All Documents </h2>
            <ul className="list-group">
            { documentsList.map( doc => function(){
              console.log("/////Map " +doc )
              return
              doc.categories.id
            } ) }
            { documentsList.map( doc => doc.categories.id ).filter( cat => cat  == 6 ).map( ( doc, index ) => 
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

export default DocumentsByCategory
