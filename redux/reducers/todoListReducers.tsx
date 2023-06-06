import { AnyAction } from "redux";
import {
  INIT_ITEMS,
  CHECK_ITEM,
  UNCHECK_ITEM,
} from "../actions/todoList/todoListActionType";

export type todoProps = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type todoList = {
  todoList: todoProps[];
};

const initialState: todoList = {
  todoList: [],
};

const checkboxCounterReducer = (
  state: todoList = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case INIT_ITEMS:
      return {
        ...state,
        todoList: action.payload,
      };
    case CHECK_ITEM:
      return state.todoList.map((item) => {
        if (item.id === action.payload.itemId) {
          item.completed = true;
          return item;
        }
        return item;
      });
    case UNCHECK_ITEM:
      return state.todoList.map((item) => {
        if (item.id === action.payload.itemId) {
          item.completed = false;
          return item;
        }
        return item;
      });

    default:
      return state;
  }
};

export default checkboxCounterReducer;
