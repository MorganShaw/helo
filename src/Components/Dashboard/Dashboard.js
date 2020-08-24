import React from 'react';
import { connect } from "react-redux";
import './Dashboard.css';
import Post from '../Post/Post';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
    componentDidMount = (id) => {
        // const {id} = this.props;
        console.log('Props in the ComponentDidMount', this.props)
        axios.get(`api/posts/${id}`).then(res => {
            this.setState({
                posts: res.data
            })
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

    searchPosts = () =>{
        //Do something here to put in the onClick for the search icon.
        //I think this is a getPost SQL query - SELECT * FROM posts WHERE id = $2;
    }

    //method: reset search
    resetSearch = () => {
        this.setState({
            search: ''
        })
    }

    render(){
        console.log(this.state.userposts)
        const {posts} = this.state;
        //this isn't quite right, I don't think. Fix it.
        // const userpostsTrue = posts.filter(post => {
        //     return post.userposts
        // }
        const mappedPosts = posts.map(post => {
            if(this.state.userposts === true){
                return <Post key={post.id} post={post}/>
            } 
        })
        return (
            <div className='dash-page'>
                <header className='top-bar-search'>
                    <div className='search-bar'>
                        <input onChange={(e) => this.handleInput(e)} className='search-input'/>
                        <button className='search-btn' onClick={this.searchPosts}>search icon</button>
                        <button className='search-reset' onClick={this.resetSearch}>Reset</button>
                    </div>
                    <div className='my-post-checkbox'>
                        {/* <h1>My Posts</h1> */}
                        <label for='my-posts'>My Posts </label>
                        <input id='my-posts' onChange={(e) => this.handleChange(e)} type='checkbox'/>
                    </div>
                </header>
                {mappedPosts}
            </div>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Dashboard);