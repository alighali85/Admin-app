import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class AdminTodo extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state= {
            userInput: '',
            usersList: []
        }
    }

    getValidiationStatue() {
        const length = this.state.userInput.length;
        if (length > 20) return 'success';
        else if (length > 10) return 'warning';
        else if (length > 0) return 'error';
        return null;

    }

 handelChange = (input)=> {
     this.setState({
         userInput: input
     })
     console.log(this.state.list)
 }

 addToList = (event) => {
    event.preventDefault();
    fetch('http://localhost:3004/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: "third product",
            author: "Ali ghali",
        })
      }).then(response => {
        console.log(response);
      });
 }
 componentDidMount() {
     console.log(
         this.props.auth
     )
    /* fetch API in action */
    fetch('http://localhost:3004/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            //Fetched product is stored in the state
           this.setState({ usersList : users });
        });
  }

  componentWillMount() {
      if ( this.props.auth !== true ){
        this.props.history.push("./home");
      }
  }

    render() {
        return (
            <Form>
                <FormGroup
                controlId='formBasicText'
                >
                <ControlLabel> Add some date to your list </ControlLabel>
                <FormControl 
                value={this.state.userInput}
                placeholder='enter text here '
                onChange={(e)=> this.handelChange(e.target.value)}/><br/>
                <Button bsStyle="primary" onClick={(e)=>this.addToList(e) }> Add to list </Button>
                </FormGroup>
                <ul>
                    {this.state.usersList.slice(0).reverse().map( user => <li key={user.id}>{user.id} - {user.name}</li>)}
                </ul>
                { this.props.auth }
            </Form>

        )
    }
}

export default AdminTodo;