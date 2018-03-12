import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import index from './reducers';
import { userLoggedIn, userNotLoggedIn } from './actions';
import { documentsCategoriesEndPoint } from './auth/utils/api';
import { checkTokenOnserver } from './auth/checkTokenOnserver';
import axios from 'axios';

let store = createStore( index );
let token = localStorage.getItem( 'token' );
 if ( token ) {
    fetch( documentsCategoriesEndPoint , {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':  `Bearer ${ token }`
        }
    } )
   .then( response => {
        if ( response.status === 200 ) {
            store.dispatch ( userLoggedIn() );
            axios.defaults.headers.common[ 'Authorization' ] = `Bearer ${ token }`;
        } else {
            store.dispatch ( userNotLoggedIn() );
            axios.defaults.headers.common[ 'Authorization' ] = null;
        }
    })
 }

function render() {
    ReactDOM.render(
        <Provider store= { store } >
            <App auth= { store.getState().auth }/>
        </Provider>  
    , document.getElementById( 'root' ) );
    registerServiceWorker();
}

store.subscribe( render );
render();