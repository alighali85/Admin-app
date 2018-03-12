import React , { Component } from 'react';
import { documentsCategoriesEndPoint } from '../../auth/utils/api';
import { Redirect } from 'react-router';
import EditCategory from '../../Containers/Categories/EditCategory';
import  '../../styles/category/editCategroy.css';


export class EditCategoryForm  extends Component {
  constructor ( props ) {
    super ( props );
      this.state = {
        categoryName: this.props.categoryName,
        fireRedirect :false,
        oldName: this.props.categoryName,
      }
  }

  handelOnChange = ( e ) =>  {
    this.setState({
      categoryName : e.target.value,
      loading : this.props.loading
    })
  }

  validateInput = ( e ) => {
    const { categoryName } = this.state;
    e.preventDefault();
    if ( categoryName.length !== 0 ) {
      const { categoryName, categoryId } = this.state;
      const documentsCategoriesEndPointId = `${documentsCategoriesEndPoint}/${this.props.categoryId }`;
      
      EditCategory.updateCategory( categoryName, categoryId, documentsCategoriesEndPointId );
      this.setState({
        fireRedirect: true
      })
    } 
    else {
        alert ( 'please type a new name for your Category' )
    }
  }

  render() {
    const { fireRedirect } = this.state;
    return ( 
      <div className="EditCategoryWraper" >
        <div className="formWraper">
           <form form className="EditCategoryForm" onSubmit= { this.validateInput }>
              <div className="CategoryName"> Edit Categroy ({ this.state.oldName } ) </div> 
                <div className="details">
                  <div className="oldName"> Category Details: <br/><hr/><br/>
                    id : # { this.props.categoryId }<br/>
                    Created at : { this.props.createDate }<br/>
                    Last update : { this.props.lastUpdate }
                  </div> <br/> <hr/>
                  <div > new name <br/>
                    <p className="newName">{ this.state.categoryName }</p>
                  </div>
              </div><br/>
              <div className="categoryName">
              <p> Type a new name :</p>
                <input className="inputName" type="text" value={ this.state.categoryName } onChange= { this.handelOnChange }/>
              </div><br/>
                <div class="condition"><br/>
                  <p>
                    <input type="checkbox" required  name="termsConfirmation"/>  
                      . I aware that this action can't be reversed </p>
                </div>
                <div class="submit"> <br/>
                    <button className="EditCategoryForm--submitButton" type= "submit"> update </button>
                </div>
            </form>
        </div>
        { fireRedirect && ( 
          <Redirect to={{
            pathname: './categories' || '/',
            state: { active: true } }} />
          )
        }
      </div> 
    )
  }
}

export default EditCategoryForm;