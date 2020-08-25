
//This is the New Post view
import React from 'react';
import axios from 'axios';
import './Form.css';

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
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    //method: submit new post

    addPost = () => {
        const { title, content, img } = this.state;
        const {username} = this.props;
        axios
          .post("/api/posts", { title, content, img })
          .then((res) => {
            this.setState({
                posts: res.data
            })
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
                </section>
            </div>
        )
    }
}

export default Form;