import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import {ADD_NOTE} from "./notelist/action";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
//store.dispatch({type : ADD_NOTE})

export default store