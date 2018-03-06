import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormControl, FormGroup, Button,ControlLabel } from 'react-bootstrap';


class AdminLogin extends Component {
    constructor( props ) {
      super( props );
      this.state = {
        alert: '',
        password: '',
        email: '',
        requestResponse: '',
        msg : this.props.msg,
        token: ''
      }
   }

   handelInputChange = ( event ) => {
     const name = event.target.name;
     this.setState({
      [name]: event.target.value,
      alert: ''
     })
   }

   loginSuccess = ( res ) => {
     this.setState( {
       token: res.data.token
     } );

     localStorage.setItem('token', this.state.token);
     window.location.href= './'
   }

   handelLoginErrors = (  ) => {
      this.setState( {
        alert : 'please check your credentials'
    } )
   }

   sendLoginRequest = ( event ) => {
      event.preventDefault();
      let userEmail = this.state.email;
      let userPassword = this.state.password;

      fetch( 'https://api.staging.mieterengel.de/login' , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: userEmail,
              password: userPassword,
          })
        }).then( response => {
          if ( response.status !== 200 ) {
            this.handelLoginErrors( response.status );
            console.log( "wrong email or password"+ response.status );
          } 
          else {
             response.json().then( data => {
               this.loginSuccess( data )
             })
          }
          return response;
          })
        }

    render() {
        return ( 
        <Grid>
          <h2>{this.state.msg}</h2>
            <h2> Admin Log in Area </h2><br/>
            <br/>
            {this.state.alert}
            <Form horizontal onSubmit={this.sendLoginRequest}>
          <FormGroup controlId="formHorizontalEmail">
            
            <Col sm={ 12 }>
              <FormControl 
                name= 'email'
                onChange={ this.handelInputChange }
                value= { this.state.email } 
                type="email" placeholder="Email" 
                />
            </Col><br/>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            
            <Col sm={ 12 }>
              <FormControl 
              name= 'password'
              onChange={ this.handelInputChange }
              value= { this.state.password } 
              type="password" 
              placeholder="Password" 
              /><br/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={ 2 } sm={ 10 }>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={ 2 } sm={ 10 }>
              <Button type="submit" bsStyle="primary" className='btn' > Log in </Button>
            </Col>
          </FormGroup>
        </Form>
        <Row>
        </Row>
      </Grid>
      )
    }

} 

export default AdminLogin;