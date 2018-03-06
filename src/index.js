import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import index from './reducers';

let store = createStore( index );
let token = localStorage.getItem( 'token');

function render() {
    // fake login
    let auth;
     if ( token !== null  ) {
         auth = true

     } else {
         auth = false
     }
    
ReactDOM.render(
    <Provider store= { store } >
            <App auth= { auth }/>
    </Provider>

        
    
, document.getElementById('root'));
registerServiceWorker();
}

store.subscribe( render );
render();