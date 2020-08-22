import React from 'react';
import axios from 'axios';
import './Auth.css';
import '../../helo_icon.png';
import { loginUser } from "../../redux/reducer";
import { connect } from 'react-redux';
import { registerUser} from '../../redux/reducer';
// import e from 'express';
class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            profilePic: '',
            newUser: false
        }
    }

    toggle = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const {username, password} = this.state;
        axios.post('/auth/login', {username, password}).then(res => {
            console.log(res.data)
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => {
            console.log(err)
            alert("Login Failed. Try registering as a new user.")
        })
    }


    register = () => {
        const {username, password, profilePic} = this.state;
        axios.post('/auth/register', {username, password, profilePic}).then(res => {
           this.props.registerUser(res.data)
           this.props.history.push('/dashboard') 
        }).catch(err => {
            console.log(err)
            alert("Registration failed")
        })
    }


    render(){
        //The following is to see what's on the user object, which is created by the axios call...and is put as res.data on the function that corresponds with the action builder in the reducer function. 
        // console.log(this.props.user)
        const {username, password, profilePic, newUser} = this.state;
        return(
            <div className="auth">    
                <div className="login-container">
                    <img className='login-logo' src="/smile_wink_icon.png" alt='logo'/>
                    <h1>Helo</h1>
                    {!newUser ? 
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
                        <button onClick={this.toggle}>Register</button>
                    </div>
                    </div>
                    :
                    <div className='login-inputs'>
                        <div className='input-block'>
                            <p>Username: </p>
                            <input placeholder='username' name="username" value={username} type="text" onChange={e => this.handleChange(e)}/>
                        </div>
                        <div className='input-block'>
                            <p>Password: </p>
                            <input placeholder='password' name="password" value={password} type="password" onChange={e => this.handleChange(e)}/>
                        </div>
                        <div className='input-block'>
                            <p>Profile Picture: </p>
                            <input placeholder='Image URL' name="profilePic" value={profilePic} type="text" onChange={e => this.handleChange(e)}/>
                        </div>
                    <div className ='btn-container'>
                        <button onClick={this.register}>Register</button>
                        <button onClick={this.toggle}>I already have an account</button>
                        {/* <button onClick={() => this.register()}>Register</button>
                        <button onClick={() => this.register()}>I already have an account</button> */}
                    </div>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser, registerUser})(Auth);