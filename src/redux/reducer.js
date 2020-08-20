// import axios from 'axios';

const initialState = {
    username: '',
    id: 0,
    profilePic: ''
}

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER;'

//Look into this. Not sure about parameters and payload value:
export function registerUser(username, id, profilePic){
    return {
        type: REGISTER_USER,
        payload: user
    }
}

export function loginUser(username, id, profilePic){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case LOGIN_USER:
            return {...state, ...user.action.payload }
        default:
            return initialState
    }
}

