import React from 'react';
import { connect } from "react-redux";

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state({
            posts: [],
            search: '',
            userposts: true
        })
    }

    //method: get all posts from database

    //method: reset search


    render(){
        return(
            <div>Dashboard</div>
        )
    }
}

export default connect()(Dashboard);