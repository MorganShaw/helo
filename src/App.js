import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
// import Auth from './Components/Auth/Auth';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Form from './Components/Form/Form';
// import Post from './Components/Post/Post';
import routes from './routes';
import {withRouter} from 'react-router-dom';


const App = (props) => {

  console.log("PROPS", props);
  return (
    <div className="App">
      {props.location.pathname !== '/' ?
        <Nav/> : null 
      }
      {routes}
    </div>
  );
}

export default withRouter(App);
