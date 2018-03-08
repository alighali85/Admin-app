import React , { Component } from 'react';
import { api } from '../../auth/utils/api';
import { Redirect } from 'react-router';
import EditCategory from '../../Containers/Documents/EditCategory';
import  './styles.css';


 export class EditCategoryForm  extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            categoryName: this.props.categoryName,
            fireRedirect :false,
            oldName: this.props.categoryName
        }
    }

    handelOnChange = ( e ) =>  {
        this.setState( {
            categoryName : e.target.value,
            loading : this.props.loading
        } )
    }

    validateInput = ( e ) => {
        const { categoryName } = this.state;
        e.preventDefault();
        if ( categoryName.length !== 0 ) {
            const { categoryName, categoryId } = this.state;
            const apiId = `${api}/${this.props.categoryId }` ;
            EditCategory.updateCategory( categoryName, categoryId, apiId );
            this.setState( {
                fireRedirect: true
            } )
        } 
        else {
            alert ( 'please type a new name for your Category' )
        }
    }

    render() {
        const { fireRedirect } = this.state;
        return ( 
        <div className=" EditCategoryWraper " >

                <div className="formWraper">
                    <form form className=" EditCategoryForm " onSubmit= { this.validateInput }>
                        <div className=" CategoryName "> Edit Categroy #id { this.props.categoryId } </div> 
                            <div className="details">
                                <div className="oldName"> old name <br/>
                                { this.state.oldName }
                                </div>
                                <div className="newName"> new name <br/>
                                { this.state.categoryName }
                            </div>
                        </div>

                        <div class="inputName">
                        <input type=" text " value={ this.state.categoryName } onChange= { this.handelOnChange }/>
                        </div>

                        <div class="condition">
                            <button type="checkbox" required name="terms"/> <p> I aware that this action can't be reversed </p>
                        </div>

                        <div class="submit">
                        <button  className= " EditCategoryForm--submitButton " type= " submit " > update </button>
                        </div>
                    </form>
                </div>
              
                { fireRedirect && ( <Redirect to={{
                    pathname: './documents' || '/thank-you',
                    state: {
                        active: true
                    }
                    }}/> ) }
                </div> 
            )
    }
};

export default EditCategoryForm;