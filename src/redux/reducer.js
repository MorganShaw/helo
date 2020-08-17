import axios from 'axios';

const initialState = {
    username: '',
    id: 0,
    profilePic: ''
}

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER;'

//Look into this. Not sure about parameters and payload value:
export function loginUser(username, profilePic){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function reducer(state = initialState, action) {
    switch(action.type){
        default:
            return initialState
    }
}

