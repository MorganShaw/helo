import React from 'react';
import axios from 'axios';
import './Nav.css';
import {Link} from 'react-router-dom';
import './home_icon.png';
import './log_out_icon.png';
import './new_post_icon.png';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/reducer';
import {getUser} from '../../redux/reducer';

// import {withRouter} from 'react-router-dom';

class Nav extends React.Component {
    
    componentDidMount(){
        this.props.getUser()
        console.log('get user reducer', this.props.getUser())
        // if (this.props.user.username === "") {
        //     this.props.history.push("/");
        //   }
    }

    logout = () => {
        axios.post('/auth/logout').then(res => {
            this.props.logoutUser();
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }
  
    render(){
    return(
        <div className='nav-container'>
            <div className="top-three">
                <div className='profile-container'>
                    <img className='profile-pic' src={this.props.profilePic} alt='profile'/>
                    <p>{this.props.username}</p>
                </div>
                <Link to='/dashboard'>
                    {/* <img className='home-icon' src="./home_icon.png" alt='home'/> */}
                    <button className='nav-btn'>Home (get icon working)</button>
                </Link>
                <Link to='/new'>
                    <button className='nav-btn'>New Post (get icon working)</button>
                    {/* <img className='new-icon' src="/new_post_icon.png" alt='new_post'/> */}
                </Link>
            </div>
            <Link to='/'>
                <button onClick={this.logout}className='nav-btn'>Logout (get icon working)</button>
                {/* <img className='logout-icon' src='/src/log_out_icon.png' alt='logout'/> */}
            </Link>
        </div>
    )
    }
}

// const mapStateToProps = state => state;

function mapStateToProps(reduxState){
    console.log("REDUX STATE Nav", reduxState)
    return {
        username: reduxState.username,
        profilePic: reduxState.profilePic
    };
}

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);