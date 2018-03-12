import React, { Component } from 'react';
import { loginApi } from '../../auth/utils/api';
import './style.css';


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
    const { name, value } = event.target;
    this.setState({
      [ name ]: value,
      alert: ''
    })
  }

  loginSuccess = ( res ) => {
    this.setState({
      token: res.data.token
    });

    localStorage.setItem( 'token', this.state.token );
    window.location.href='./'
  }

  handelLoginErrors = (  ) => {
    this.setState({
      alert : 'Error: please check your credentials'
    })
  }

  sendLoginRequest = ( event ) => {
    event.preventDefault();
    let userEmail = this.state.email;
    let userPassword = this.state.password;

    fetch( loginApi , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
            email: userEmail,
            password: userPassword,
        } )
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
        <div className="login-wraper">
            <h2 className="login-title"> Admin Log in Area </h2>
            <p style={{color: 'yellow' }}> { this.state.alert }</p>
            <form horizontal onSubmit={ this.sendLoginRequest }>
          <div className="loginInput-group">
            <div >
              <input
                className="loginInput-email"
                name="email"
                onChange={ this.handelInputChange }
                value= { this.state.email } 
                type="email" placeholder="Email" 
                />
            </div><br/>
          </div>

          <div className="loginInput-group">
            <div>
              <input
                className="loginInput-password"
                name="password"
                onChange={this.handelInputChange }
                value={this.state.password } 
                type="password" 
                placeholder="Password" 
              /><br/>
            </div>
          </div>

          <div>
            <div  sm={ 12 }>
              <button type="submit" bsStyle="primary" className='btn' > Log in </button>
            </div>
          </div>
        </form>
        
      </div>
      )
    }
} 

export default AdminLogin;