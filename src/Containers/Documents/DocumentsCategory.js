import React, { Component } from 'react';
import DocumentsCategoryList from '../../Components/AdminDocuments/DocumentsCategoryList';
import { documentsEndPoint } from '../../auth/utils/api';


class DocumentsCategory extends Component {
  constructor( props ) {
    super( props );
      this.state = {
        categoryName: this.props.location.state.categoryName,
        category: this.props.match.params.id,
        documentsByCategory: [],
    }
  }

  getDocumentsByCategory = () => {
    const { category } = this.state;
    const apiEndPoint = documentsEndPoint + '?categoryIds[]='+ category;
    fetch( apiEndPoint , {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':  `Bearer ${ localStorage.getItem( 'token' ) }`
      }
    }).then( response => response.json() )
        .then( responseData => {
          this.setState({
            documentsByCategory: responseData.data,
          });
      });
  }

  componentWillMount() { 
    this.getDocumentsByCategory();
  }

  render() {
    return(
      <DocumentsCategoryList
        documents={ this.state.documentsByCategory }
        categoryName= { this.state.categoryName }
      />
    )
  }
}

export default DocumentsCategory;