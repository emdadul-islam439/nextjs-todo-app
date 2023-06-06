import { legacy_createStore, combineReducers } from "redux";

import checkboxCounterReducer from "./reducers/checkboxCounterReducers";
import todoListReducers from "./reducers/todoListReducers";

const rootReducer = combineReducers({
  todoList: todoListReducers,
  checkboxCounter: checkboxCounterReducer,
});
const store = legacy_createStore(rootReducer);

export default store;
