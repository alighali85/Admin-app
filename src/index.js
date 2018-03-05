import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import { userLoggedIn, userNotLoggedIn } from './actions/index';


let store = createStore( allReducers );
let token = localStorage.setItem('token', true);

function render() {
    if ( token ){
        store.dispatch( userLoggedIn())
    }else{
        store.dispatch(userNotLoggedIn() )
    }
    
    console.log( localStorage.getItem('token'))
}
render();

ReactDOM.render(
    <Provider> 
        <BrowserRouter>
            <App store = {store}/>
        </BrowserRouter>
    </Provider>
    
, document.getElementById('root'));

