import { legacy_createStore, combineReducers } from "redux";

import checkboxCounterReducer from "./reducers/checkboxCounterReducers";
import todoListReducers from "./reducers/todoListReducers";

export const rootReducer = combineReducers({
  todoList: todoListReducers,
  checkboxCounter: checkboxCounterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = legacy_createStore(rootReducer);

export default store;
