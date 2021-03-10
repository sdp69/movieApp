//import React, {createContext} from 'react';
import React from "react";
import {Provider} from "react-redux";
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
//export const StoreContext = createContext();

/*class Provider extends React.Component {
    render() {
        const {store} = this.props;
        return <StoreContext.Provider value={store}>
            {this.props.children}
        </StoreContext.Provider>
    }
}
export function connect(callback) {
    return function (Component) {
        class ConnectedComponent extends React.Component {
            constructor(props) {
                super(props);
               this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
            }
            componentWillUnmount() {
                this.unsubscribe();
            }

            render() {
                const {store} = this.props;
                const state = store.getState();
                const dataToBePassedAsProps = callback(state);
                return (<Component {...dataToBePassedAsProps} dispatch={store.dispatch}/>)
            }
        }

        class ConnectedComponentWrapper extends React.Component {
            render() {
                return (
                    <StoreContext.Consumer>
                        {(store) => <ConnectedComponent store={store}/>}
                    </StoreContext.Consumer>
                );
            }
        }

        return ConnectedComponentWrapper;
    }
}*/

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);

reportWebVitals();
