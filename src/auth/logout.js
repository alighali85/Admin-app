

 export const logout =  function () {
    localStorage.clear( 'token');
    window.location.href = '/'
}

export default logout