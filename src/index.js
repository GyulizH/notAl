import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import store from "./redux/store";
import {applyMiddleware, createStore} from "redux";
import LocalStorage from "./Utils/LocalStorage";
import reducers from "./redux/reducers";

const createStoreWithMiddleware = applyMiddleware(LocalStorage)(createStore)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.querySelector('#app')
)
