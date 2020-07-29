import { combineReducers, createStore } from "redux";
import usersReducers from "./usersReducer";

let rootReducer = combineReducers({
  users: usersReducers,
});

let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
