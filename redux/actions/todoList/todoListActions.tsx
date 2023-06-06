import { CHECK_ITEM, UNCHECK_ITEM, INIT_ITEMS } from "./todoListActionType";
import { todoProps } from "../../reducers/todoListReducers";

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
