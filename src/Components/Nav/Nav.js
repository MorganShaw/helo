import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import './home_icon.png';
import './log_out_icon.png';
import './new_post_icon.png';

class Nav extends React.Component {
    render(){
        return(
            <div className='nav-container'>
                <div className="top-three">
                    <div className='profile-container'>
                        <img className='profile-pic' src='https://robohash.org/why' alt='profile'/>
                        <p>PLACEHOLDER: PUT USERNAME HERE</p>
                    </div>
                    <Link to='/dashboard'>
                        {/* <img className='home-icon' src="./home_icon.png" alt='home'/> */}
                        <button className='nav-btn'>Home</button>
                    </Link>
                    <Link to='/new'>
                        <button className='nav-btn'>New Post</button>
                        {/* <img className='new-icon' src="/new_post_icon.png" alt='new_post'/> */}
                    </Link>
                </div>
                <Link to='/'>
                    <button className='nav-btn'>Logout</button>
                    {/* <img className='logout-icon' src='/src/log_out_icon.png' alt='logout'/> */}
                </Link>
            </div>
        )
    }
}

export default Nav; 

{/* <Route exact path="/" component={Auth}/>
<Route path="/dashboard" component={Dashboard}/>
<Route path="/post/:postid" component={Post}/>
<Route path="/new" component={Form}/> */}