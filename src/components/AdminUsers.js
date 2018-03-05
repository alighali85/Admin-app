import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router';
import { Grid, Row, Col, ListGroup, ListGroupItem, PageHeader, Panel, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';


class AdminUsers extends Component {
    constructor( props ) {
        super( props );
        this.store = this.props.store;
        this.state = {
            userInput: '',
            userInputEmail: '',
            usersList: [],
            auth: false
        }
    }

    userEmail =  {
        color: "gray",
        marginLeft: "48px"
    }

    hoverStyle = {
        color: 'red'
    }

    onHover = (event)=> {
        event.target.style.color = 'red'
    }
    onMouseLeave (event){
        event.target.style.color = 'white';
        console.log("mouse leaves")
    }

     handelChange = (event)=> {
         const name = event.target.name;
        this.setState({ [name]: event.target.value });         
    }

    addToList = (event) => {
        event.preventDefault();
        fetch('http://localhost:3004/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.userInput,
                email: this.state.userInputEmail,
            })
          }).then(response => {
            console.log(response);
            this.componentDidMount();
          });
          this.setState({
              userInput:'',
              userInputEmail:''
          })
     }

    componentDidMount() {
        console.log( 'The store  ' + this.props.store );
        fetch('http://localhost:3004/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
               this.setState({ usersList : users });
            });
      }
       removeUser (usrid)  {
            return fetch('http://localhost:3004/users/'+ usrid, {
              method: 'delete'
            })
            .then(response => {
                this.componentDidMount();
            }
                
        )   
    }

    render() {
       if ( this.state.auth === true ){

       
      return (
          
       
        <Grid>
            <Row>
                <Col md={6} sm={6} lg={6} mdOffset={9} lgOffset={9} smOffset={9}>
                <Form>
                <FormGroup
                controlId='formBasicText'
                >
                <ControlLabel>Admin Users  <small> :Here is a list of users</small></ControlLabel>
                <FormControl  name='userInput'
                value={this.state.userInput}
                placeholder='enter text here '
                onChange={this.handelChange}/><br/>
                <FormControl name='userInputEmail'
                value={this.state.userInputEmail}
                placeholder='like email@email  '
                onChange={this.handelChange}/><br/>

                <Button bsStyle="primary" onClick={(e)=>this.addToList(e) }> Add to list </Button>
                </FormGroup>

                    <ListGroup>
                    {this.state.usersList.slice(0).reverse().map( (user,index) =>
                        <ListGroupItem href="#" key={index} className ='usersList'> 
                             {user.id} 
                            -{user.name}: 
                            <small id='email' className ='usersEmail'>{user.email}
                            </small>
                            <Button onClick={this.removeUser.bind(this, user.id)} bsStyle="primary" style={deleteButton}><small> Delete </small></Button>
                        </ListGroupItem>)}
                    </ListGroup>
            </Form>
                
                </Col>
            </Row>
        </Grid>)}
      else{
          return (
<Switch>
            <Redirect to='/login' msg={"PLease Login to Continue "}/>
        </Switch>
          ) 
          
      }
        
      }
    }
    const userImg = <h2>uuu</h2>
    const deleteButton = {
        fontSize: "14px",
        color: "lightGray",
        position: "absolute",
        right:'10px',
        bottom: '7px',
    }


export default AdminUsers;