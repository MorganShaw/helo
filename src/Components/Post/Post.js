import React from 'react';
import './Post.css';
import {connect} from 'react-redux';


class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            title: '',
            img: '',
            content: '',
            author: '',
            profilePic: ''
        })
    }

    // method: get post information

    render(){
        const {title, author, profilePic} = this.props;
        // const {title, author, profilePic} = this.state;
        return(
            <div className='post'>
                <h1 className='post-title'>{title}</h1>
                <div className='by-author-container'>
                    <h2>by {author}</h2>
                    <img src={profilePic}/>
                </div>            
                

            </div>
        )
    }
}

function mapToState(state){
    return state
}

export default connect(mapToState)(Post);

//wrap each post container in a Link, to go 