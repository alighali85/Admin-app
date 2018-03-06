// create Initial staet to  statrt the application with 

const initialState = {
    auth: false,
    userId: 'Ali ghali',
    token: null
}

// create the reducers 
export default( state = initialState, action )=> {
    switch( action.type )
    {
        case 'USER_LOGGED_IN':
        return Object.assign( {}, state, {
            auth: true,
            userId: 'NOT ALI '
        })

        case 'USER_NOT_LOGGED_IN' :
        return Object.assign( {}, state, {
            auth: false
        })
        default: return state
    }
}