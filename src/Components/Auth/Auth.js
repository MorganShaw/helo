import React from 'react';
import axios from 'axios';
import './Auth.css';
import '../../helo_icon.png';
// import e from 'express';
class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            newUser: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const {username, password} = this.state;
        axios.post('/auth/login', {username, password}).then(res => {
            this.setState({
                username: res.data,
                password: res.data
            })
        })
    }
    render(){
        const {username, password, firstName, lastName} = this.state;
        return(
            <div className="auth">
                <div className="login-container">
                    <img className='login-logo' src="/smile_wink_icon.png" alt='logo'/>
                    <h1>Helo</h1>
                    <div className='login-inputs'>
                        <div className='input-block'>
                            <p>Username: </p>
                            <input/>
                        </div>
                        <div className='input-block'>
                            <p>Password: </p>
                            <input/>
                        </div>
                    <div className ='btn-container'>
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;