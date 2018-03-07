import React , { Component } from 'react';
import { api } from '../../auth/utils/api';

class EditForm extends Component {
    constructor ( props ) {
        super ( props );
        
    }
    
    render() {
        return ( <form>
            <input type="text" onChange={ EditeCaterory.handelChange }/> 
            {this.props.id}
        </form>)
    }
}


class EditeCaterory extends Component {
    constructor ( props ) {
        super ( props );
        this.state = []
    }
static handelChange =(e)=> {
        console.log( e.target.value)
    }
    componentDidMount () {
        const  { categoryId } = this.props.location.state.categoryId;
    }

    render () {
        return ( <h2> Category: { this.props.location.state.categoryId }  -{ this.props.location.state.categoryName }
        <br/>
        <EditForm  parent={'EditeCaterory'} id='4'/>
        
        </h2> )
    }
};

export default EditeCaterory;