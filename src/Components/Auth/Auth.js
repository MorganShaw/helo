import React from 'react';
import axios from 'axios';
import './Auth.css';
import '../../helo_icon.png';
import { loginUser } from "../../redux/reducer";
import { connect } from 'react-redux';
// import e from 'express';
class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
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
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => {
            console.log(err)
            alert("Login Failed")
        })
    }

    // register = ()

    register = () => {
        const {username, password} = this.state;
        axios.post('/auth/register', {username, password}).then(res => {
            this.setState 
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
                            <input placeholder='username' name="username" value={username} type="text" onChange={e => this.handleChange(e)}/>
                        </div>
                        <div className='input-block'>
                            <p>Password: </p>
                            <input placeholder='password' name="password" value={password} type="text" onChange={e => this.handleChange(e)}/>
                        </div>
                    <div className ='btn-container'>
                        <button onClick={this.login}>Login</button>
                        <button onClick={this.register}>Register</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;