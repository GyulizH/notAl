import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState, saveState } from '../Utils/LocalStorage'
import LocalStorage from '../Utils/LocalStorage'

const createStoreWithMiddleware = applyMiddleware(LocalStorage)(createStore)

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
store.subscribe(() => {
  saveState({
    notes: store.getState().notes,
  })
  loadState({
    notes: store.getState().notes,
  })
})

export default store
