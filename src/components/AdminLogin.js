import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormControl, FormGroup, Checkbox, Button,ControlLabel } from 'react-bootstrap';


class AdminLogin extends Component {
    constructor(props){
    super(props);
    this.state= {
      alert: '',
      JWT: " ...",
      userInput: '',
      userInputEmail: '',
      requestResponse: '',
      msg : this.props.msg,
      token: ''
    }    

   }

   handelInputChange = (event)=> {
     const name = event.target.name;
     this.setState({
      [name]: event.target.value,
      alert: ''
     })
   }
   handelSuccess = ( res )=> {
     res.json().then( jsonRes=> this.setState({
       token: jsonRes
     }));
     console.log( this.state.token)
   }

   handelPostErrors =( response ) => {
     
    if (!response.ok) {
      this.setState({
        alert : 'please check your credentials'
      })
  }
  return response;
   }

    getJWt = (event) => {
      event.preventDefault();
      fetch('https://api.staging.mieterengel.de/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: "test@mailinator.com",
              password: "12345",
          })
        }).then(this.handelPostErrors).then(this.handelSuccess)
   }


   
   componentDidMount() {
     const lst= localStorage.getItem('token');
     
   }

    
   

    render() {
      const { JWT } = this.state
        return ( 
        <Grid>
          <h2>{this.state.msg}</h2>
            <h2> Admin Log in Area </h2><br/>
            <br/>
            {this.state.alert}
            <Form horizontal onSubmit={this.getJWt}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl 
                name= 'userInputEmail'
                onChange={this.handelInputChange}
                value= {this.state.userInputEmail} 
                type="email" placeholder="Email" 
                />
            </Col><br/>
            {this.state.userInputEmail}
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl 
              name= 'userInput'
              onChange={this.handelInputChange}
              value= {this.state.userInput} 
              type="password" 
              placeholder="Password" 
              /><br/>
              {this.state.userInput}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" bsStyle="primary" className='btn' >Sign in</Button>
            </Col>
          </FormGroup>
        </Form>

        <Row>
          <p>the JSON web token you have is : {this.state.requestResponse}</p>
        </Row>
      </Grid>)
        
    }

} 

export default AdminLogin;