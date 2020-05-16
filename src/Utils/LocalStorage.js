import { ADD_NOTE } from '../redux/notelist/action'

export default function ({ dispatch }) {
  return (next) => (action) => {
    if (action.type === ADD_NOTE) {
      localStorage.setItem('note', JSON.stringify(action.payload))
    }
    next(action)
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // die
  }
}
