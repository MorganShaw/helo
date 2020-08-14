import React from 'react';
import './Auth.css';

class Auth extends React.Component {
    render(){
        return(
            <div className="auth">
                <div className="login-container">
                    <img src=''/>
                    <h1>Helo</h1>
                    <div className='login-inputs'>
                        <div className='input-block'>
                            <p>Username</p>
                            <input/>
                        </div>
                        <div className='input-block'>
                            <p>Password</p>
                            <input/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;