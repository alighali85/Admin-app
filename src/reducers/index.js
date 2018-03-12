const initialState = {
  auth: false,
  userId: 'Ali ghali',
  token: null
}

export default( state = initialState, action )=> {

  switch( action.type ) {

    case 'USER_LOGGED_IN':
    return Object.assign( {}, state, {
        auth: true,
    })

    case 'USER_NOT_LOGGED_IN' :
    return Object.assign( {}, state, {
        auth: false
    })

    default: return state
  }
}