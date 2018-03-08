// action creaters

import { USER_LOGGED_IN , USER_NOT_LOGGED_IN, SET_USER } from './actionTypes';

export const userLoggedIn = () => {
    return {
        type: USER_LOGGED_IN
    }
}

export const userNotLoggedIn = () => {
    return {
        type: USER_NOT_LOGGED_IN
    }
}

export const setUser = ( userId, token  )=> {
    return {
        type: SET_USER,
        userId,
        token
    }
}
