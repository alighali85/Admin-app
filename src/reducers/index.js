
// create Initial staet to  statrt the application with 

const initialState = {
    auth: false,
    user: 'Ali Ghali',
    token: '0'
}

// create the reducers 
export default function ( state = initialState , action ) {
    switch( action.type ){
        case 'USER_LOGGED_IN':
        return Object.assign( {}, state, {
            auth: true,
            userId: '1'
        })
        
        case 'USSER_NOT_LOGGED_IN':
        return Object.assign( {}, state, {
            auth: true,
            userId: '0'
        })
        default:
         return state
    }
}