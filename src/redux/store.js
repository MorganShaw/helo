import reducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middlware';


export default createStore(reducer, applyMiddleware(promiseMiddleware));