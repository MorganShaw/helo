import axios from 'axios';

const initialState = {
    username: '',
    id: 0,
    profilePic: ''
}

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER;'


export function loginUser(username, profilePic){
    return {
        type: LOGIN_USER,
        payload: ,
    }
}