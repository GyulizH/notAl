import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { ADD_NOTE } from "./notelist/action";
import { loadState, saveState } from "../Utils/LocalStorage";
import LocalStorage from "../Utils/LocalStorage";

const createStoreWithMiddleware = applyMiddleware(LocalStorage)(createStore);

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);

const persistData = store => next => action => {
	let localState = localStorage.getItem("note-list");

	if (localState && typeof JSON.parse(localState) === "object") {
		localState = JSON.parse(localState);
	} else {
		let allNotes = action.payload;
		let notesState = { allNotes: allNotes };
		localState = Object.assign({}, { notes: notesState });
	}
};

const addNoteMiddleWare = store => next => action => {
	if (action.type === ADD_NOTE) {
		localStorage.setItem("notes", JSON.stringify(action.payload));
	}
	return next(action);
};

store.subscribe(() => {
	console.log('An action is dispatched')
	saveState({
		notes: store.getState().notes
	});
	loadState({
		notes: store.getState().notes
	})
});

console.log(store.getState());
export default store;
