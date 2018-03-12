import { createStore } from 'redux';
import allreducers from '../reducers';

const store = createStore( allreducers );

export const checkTokenOnServer = ( api, token ) => fetch( api, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ token }`,
  },
});
