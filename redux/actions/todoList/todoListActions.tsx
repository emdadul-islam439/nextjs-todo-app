import { CHECK_ITEM, UNCHECK_ITEM, INIT_ITEMS } from "./todoListActionType";
import { todoProps } from "../../reducers/todoListReducers";
import { todoListUpdateApi } from "@/api/todoList";

export const todoListUpdate = () => async (dispatch: any) => {
  const data = await todoListUpdateApi();
  if (data == undefined) return;

  const todos: todoProps[] = [];
  for (const todo of data) {
    todo.completed = false;
    todos.push({
      ...todo,
    });
  }

  const firstTenItems = todos.slice(0, 10);
  //debug(response);
  return dispatch({
    type: INIT_ITEMS,
    payload: firstTenItems,
  });
};

export const initItem = (itemList: todoProps[]) => {
  return {
    type: INIT_ITEMS,
    payload: itemList,
  };
};

export const checkItem = (itemId: number) => {
  return {
    type: CHECK_ITEM,
    payload: itemId,
  };
};

export const unCheckItem = (itemId: number) => {
  return {
    type: UNCHECK_ITEM,
    payload: itemId,
  };
};
