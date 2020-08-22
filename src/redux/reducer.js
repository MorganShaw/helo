// import axios from 'axios';

const initialState = {
    username: '',
    id: 0,
    profilePic: ''
}

// const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER;'
const REGISTER_USER = 'REGISTER_USER;'

//Look into this. Not sure about parameters and payload value:
export function registerUser(user){
    return {
        type: REGISTER_USER,
        payload: user
    }
}

export function loginUser(user){
    //refer to Auth.js line 27 (res.data passed into this.props.loginUser)
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case LOGIN_USER:
            //the following creates a "user" object with three properties on it. This is the proper way to do this.
            return {...state, ...action.payload }
            //The next example steps into the object and pulls each property out. It doesn't return an object. 
            // return {...state, username: action.payload.username, id: action.payload.id, profilePic: action.payload.profilePic  }
        // case REGISTER_USER:
        //     return {...state, ...action.payload}  
        case REGISTER_USER:
            return {...state, ...action.payload}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        default:
            return initialState
    }
}

