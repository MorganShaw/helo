import React from 'react';

class Post extends React.Component {
    constructor(){
        super();
        this.state = ({
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        })
    }

    // method: get post information

    render(){
        return(
            <div className='post'>
                <h1 className='post-title'>Post Title</h1>
                <div className='by-author-container'>
                    <h2>by {this.state.author}</h2>
                    <img src={this.state.authorPicture}/>
                </div>            
                

            </div>
        )
    }
}

export default Post;

//wrap each post container in a Link, to go 