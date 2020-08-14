import React from 'react';
import './reset.css';
import './App.css';
import Nav from './Components/Nav/Nav';
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
