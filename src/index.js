import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import combineReducers from "./components/reducers";

//curried form of function logger.
//React will internally call this logger(obj) it passes obj which has dispatch and getState.
//logger(obj)(next)(action)
/*const logger = function ({dispatch, getState}){
    return function (next) {
        return function (action) {
            //middleware code
            console.log(`ACTION_TYPE=`, action.type);
            next(action);
        };
    };
};*/
const logger = ({dispatch, getState}) => (next) => (action) => {
    //middleware code
    if (typeof action !== `function`)
        console.log(`ACTION_TYPE=`, action.type);
    next(action);
};
const thunk = ({dispatch, getState}) => (next) => (action) => {
    if(typeof action === `function`){
        action(dispatch);
        return;
    }
    next(action);
};
const store = createStore(combineReducers, applyMiddleware(logger,thunk));

console.log(`After State`, store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
