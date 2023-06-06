import { AnyAction } from "redux";
import {
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
} from "../actions/checkBoxCounter/checkBoxCounterActionsType";

const initialState = {
  numOfCheckedItem: 0,
};

const checkboxCounterReducer = (state = initialState, action: AnyAction) => {
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

    default:
      return state;
  }
};

export default checkboxCounterReducer;
