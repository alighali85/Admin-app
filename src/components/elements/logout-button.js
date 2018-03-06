import React from 'react';


function logout() {
    localStorage.clear( 'token') ;
    console.log('you should log out ')
}

const logoutButton = <button className='btn btn-primary'> Log out 

</button>

export default logoutButton