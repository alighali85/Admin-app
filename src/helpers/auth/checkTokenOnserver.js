import store  from '../store.js';
import { userLoggedIn, userNotLoggedIn, saveUser } from '../actions';
import { documentsCategoriesEndPoint } from '../auth/utils/api.js';
import axios from 'axios';

let token = localStorage.getItem( 'token' );

export default function checkTokenOnServer() {
  if( token ) {
    axios.defaults.headers.common[ 'Authorization' ] = `Bearer ${ token }`;
    axios.get( documentsCategoriesEndPoint )
   .then( response => {
        if ( response.status === 200 ) {
          store.dispatch ( userLoggedIn() );
        }
        else {
          store.dispatch ( userNotLoggedIn() );
          axios.defaults.headers.common[ 'Authorization' ] = null;
        }
    })
  } else {
    store.dispatch ( userNotLoggedIn() );
  }
    
 }
  
