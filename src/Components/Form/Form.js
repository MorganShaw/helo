
//This is the New Post view
import React from 'react';
import axios from 'axios';
import './Form.css';
import {connect} from 'react-redux';

class Form extends React.Component {
    constructor(){
        super();
        this.state = ({
            title: '',
            img: '',
            content: ''
        })
    }

    //method: handle change (3)
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    //method: submit new post

    addPost = () => {
        const { title, img, content } = this.state;
        const {userId} = this.props;
        axios
          .post(`/api/posts/${userId}`, { title, img, content })
          .then((res) => {
            // this.props.getPosts(res.data)
            this.props.history.push('/dashboard')
          })
          .catch((err) => console.log(err)
          ); 
    }
    render(){
        const {title, content, img} = this.state;
        return(
            <div className='form-page'>
                <section className='form-container'>
                    <h1>New Post</h1>
                    <div className='input-container'>
                        <h3>Title:</h3>
                        <input 
                            className='input-bar'
                            onChange={(e) => this.handleChange(e)}
                            name='title'
                            value={title}/>

                    </div>
                    <img src={img} alt='broken camera'/>
                    <div className='input-container'>
                        <h3>Image URL:</h3>
                        <input 
                            className='input-bar'
                            onChange={(e) => this.handleChange(e)}
                            name='img'
                            value={img}/>

                    </div>
                    <div className='input-container'>
                        <h3>Content:</h3>
                        <textarea 
                            className='text-box input-bar'
                            onChange={(e) => this.handleChange(e)}
                            name='content'
                            value={content}/>

                    </div>
                    <button 
                        onClick={() => this.addPost()}
                        className='post-btn'>Post</button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        userId: reduxState.userId
    }
}
export default connect(mapStateToProps)(Form)