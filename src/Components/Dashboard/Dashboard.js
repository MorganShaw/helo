import React from 'react';
import { connect } from "react-redux";
import './Dashboard.css';
import Post from '../Post/Post';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
    componentDidMount = () => {
        // const {id} = this.props;
        // console.log('Props in the ComponentDidMount', this.props)
        const {userId} = this.props;
        const {search, userposts} = this.state;
        axios.get(`api/posts/${userId}?search=${search}&userposts=${userposts}`).then(res => {
            this.setState({
                posts: res.data
            }) 
        }).catch((err) => {
            console.log(err)
        })
    }       


    handleInput = (e) => {
        this.setState({
            search : e.target.value
        })
    }

    handleChange =(e) => {
        this.setState({
            userposts: !this.state.userposts
        })
    }
    //method: get all posts from database
    // getAllPosts = () => {
    //     axios.get('/api/posts').then(res => {
    //         this.setState({
    //             search: e.target.value
    //         })
    //     })
    // }

    // searchPosts = () =>{
    //     //Do something here to put in the onClick for the search icon.
    //     //I think this is a getPost SQL query - SELECT * FROM posts WHERE id = $2;
    // }

    //method: reset search
    resetSearch = () => {
        const {userId} = this.props;
        const {userposts} = this.state;
        axios.get(`/api/posts/${userId}?userposts=${userposts}`).then(res => {
            this.setState({
                posts: res.data,
                search: ''
            })
        })
    }

    // savePost = (title, content, img, author) => {
    //     const {title, content, img, author} = this.props;
    //     axios
    //       .put(`/api/posts/${id}`, { title, content, img, author })
    //       .then((res) => {
    //         this.setState({
    //             posts: res.data
    //             })
    //         })
    //       .catch((err) => console.log(err)
    //       ); 
    // }
    
    
    
    // deleteProduct = (id) => {
    //     const {id} = this.props;
    //     axios
    //       .delete(`/api/posts/${id}`)
    //       .then((res) => {
    //         this.setState({
    //             posts: res.data
    //         })
    //       })
    //       .catch((err) => console.log(err)
    //       ); 
    // }




    render(){
        console.log(this.state.userposts)
        const {posts, search, userposts} = this.state;
        // const mappedPosts = posts.map(post => {
        //     return <Post key={post.id} post={post}/>
        //     })
        return (
            <div className='dash-page'>
                <header className='top-bar-search'>
                    <div className='search-bar'>
                        <input 
                            onChange={(e) => this.handleInput(e)} className='search-input' placeholder='Search by Title'
                            name='search'
                            value={search}/>
                        <button 
                            className='search-btn' 
                            onClick={this.searchPosts}>Search</button>
                        <button 
                            className='search-reset' 
                            onClick={this.resetSearch}>Reset</button>
                    </div>
                    <div className='my-post-checkbox'>
                        {/* <h1>My Posts</h1> */}
                        <label for='my-posts'>My Posts </label>
                        <input 
                            id='my-posts' 
                            onChange={(e) => this.handleChange(e)} type='checkbox'
                            name='userposts'
                            value={userposts}/>
                    </div>
                </header>
                <div className='all-posts'>
                {/* {mappedPosts} */}
                    {posts.map((post, index, array) => {
                    return (
                        <Post
                        saveEdit={this.saveEdit}
                        deletePost={this.deletePost}
                        post={post}
                        index={index}
                        />
                        );
                    })};
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    console.log("redux state userId", reduxState.userId)
    return {
        userId: reduxState.userId
    }
}

export default connect(mapStateToProps)(Dashboard)