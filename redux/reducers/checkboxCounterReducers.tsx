import { AnyAction } from "redux";
import {
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
  GET_CHECKED_ITEM_COUNT,
} from "../actions/checkBoxCounter/checkBoxCounterActionsType";

export type checkBoxCounter = {
  numOfCheckedItems: number;
};

const initialState = {
  numOfCheckedItems: 0,
};

const checkboxCounterReducer = (
  state: checkBoxCounter = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case INCREASE_ITEM_COUNT:
      return {
        ...state,
        numOfCheckedItem: state.numOfCheckedItem + 1,
      };
    case DECREASE_ITEM_COUNT:
      return {
        ...state,
        numOfCheckedItem: state.numOfCheckedItem - 1,
      };
    case GET_CHECKED_ITEM_COUNT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default checkboxCounterReducer;
