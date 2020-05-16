import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { saveState } from '../Utils/LocalStorage'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
store.subscribe(() => {
  saveState({
    notes: store.getState().notes,
  })
})

export default store
