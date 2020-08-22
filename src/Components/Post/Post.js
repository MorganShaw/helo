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
            <div>Post</div>
        )
    }
}

export default Post;