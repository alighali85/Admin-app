import React, { Component } from 'react';
import EditCategoryForm from '../../Components/AdminDocuments/EditCategoryForm';
import axios from 'axios';
import api from '../../auth/utils/api'


class EditCategory extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            errors: 'false'
        }
    }

    static updateCategory( categoryName, id, api ) {
        axios.put( api , { name: categoryName
                    } )
                    .then( response => {
                         if( response.status === 200 ) {
                         }
                    } )
                    .catch( error => {
                        console.log( error );
                    } );

    }

    componentDidMount() {
    }

    render() {
        const { categoryId, categoryName, createDate, lastUpdate } = this.props.location.state;
        return <EditCategoryForm
         categoryId={ categoryId  }
         categoryName={ categoryName }
         loading={ this.state.loading }
         createDate={ createDate }
         lastUpdate={ lastUpdate }
         />
    }
}

export default EditCategory;