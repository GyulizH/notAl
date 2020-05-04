import { ADD_NOTE } from '../redux/notelist/action'

export default function ({ dispatch }) {
  return next => action => {
    if (action.type === ADD_NOTE) {
      console.log(action.payload)
      localStorage.setItem('note', JSON.stringify(action.payload))
    }
    next(action)
  }
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')

    if (serializedState === null) {
      return ['empty']
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const allUnselected = state.notes.map(note => ({
      ...note,
      isSelected: false,
    }))

    const serializedState = JSON.stringify(allUnselected)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // die
  }
}

// const LocalStorage = {};
// //the getter method
// LocalStorage.get = key => {
//     return localStorage.getItem(key);
// };
// //the setter method
// LocalStorage.set = (key, value) => {
//     return localStorage.setItem(key, value);
// };
// //the remove method
// LocalStorage.remove = key => {
//     return localStorage.removeItem(key);
// };
