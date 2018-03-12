import React, { Component } from 'react';
import axios from 'axios';
import { documentsEndPoint } from '../../auth/utils/api';
import '../../styles/documents/documentList.css';
import AdminDocuments from '../../Components/AdminDocuments/AdminDocuments';


class Documents extends Component {
  constructor( props ) {
    super( props );
    this.state = {
        documentsList: []
    }
  }
  
  getDocuments = () => {
    fetch( documentsEndPoint , {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ localStorage.getItem( 'token' ) }`
      }
    }).then( response => response.json() )
      .then( responseData => {
        this.setState({
          documentsList: responseData.data
        });
      }) 
  }

  componentWillMount() {
    if ( this.props.auth !== true ) {
         this.props.history.push( "/" );
      }
      else {
        this.getDocuments();
      }
   }

  render() {
    const { documentsList } = this.state;
    return ( <AdminDocuments documents={ documentsList }/> )
  }
}

export default Documents;