import { userLoggedIn, userNotLoggedIn } from '../actions/index';
import { createStore } from 'redux';
import allreducers from '../reducers';
let store = createStore( allreducers);

export const checkTokenOnserver = ( api, token ) => {
     
     return fetch( api , {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':  `Bearer ${ token }`
        }
    })
        }