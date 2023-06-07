import { legacy_createStore, combineReducers } from "redux";
const reduxThunk = require("redux-thunk");
const redux = require("redux");

import checkboxCounterReducer from "./reducers/checkboxCounterReducers";
import homePageReducer from "./reducers/homePageReducers";
import todoListReducers from "./reducers/todoListReducers";

export const rootReducer = combineReducers({
  homePageStatus: homePageReducer,
  todoList: todoListReducers,
  checkboxCounter: checkboxCounterReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

//middleware
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = reduxThunk.default;

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
