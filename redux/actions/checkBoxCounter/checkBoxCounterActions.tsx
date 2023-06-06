import {
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
  GET_CHECKED_ITEM_COUNT,
} from "./checkBoxCounterActionsType";

export const increaseItemCount = () => {
  return {
    type: INCREASE_ITEM_COUNT,
  };
};

export const decreaseItemCount = () => {
  return {
    type: DECREASE_ITEM_COUNT,
  };
};

export const getCheckedItemCount = () => {
  return {
    type: GET_CHECKED_ITEM_COUNT,
  };
};
