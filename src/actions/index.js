
// actions to be passed to reduceres

import { USSER_LOOGED_IN , USSER_NOT_LOGGED_IN } from './actionTypes';

export const userLoggedIn = ()=> {
    return {
        type: 'USER_LOGGED_IN'
    }
}

export const userNotLoggedIn = ()=> {
    return {
        type: 'USER_NOT_LOGGED_IN'
    }
}
