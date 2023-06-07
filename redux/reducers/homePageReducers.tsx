import { AnyAction } from "redux";
import {
  ENABLE_DATA_BTN_PRESSED,
  ENABLE_LOADED_TODOS,
  ENABLE_LOADING,
  DISABLE_DATA_BTN_PRESSED,
  DISABLE_LOADED_TODOS,
  DISABLE_LOADING,
  LOADING_STATUS,
  DATA_BTN_STATUS,
  LOADED_TODOS_STATUS,
} from "../actions/homePage/homePageActionsType";

export type homePageStatus = {
  isDataBtnPressed: Boolean;
  isTodoSavingFinished: Boolean;
  isLoading: Boolean;
};

const initialState = {
  isDataBtnPressed: false,
  isTodoSavingFinished: false,
  isLoading: true,
};

const homePageReducer = (
  state: homePageStatus = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ENABLE_DATA_BTN_PRESSED:
      return {
        ...state,
        isDataBtnPressed: true,
      };
    case ENABLE_LOADED_TODOS:
      return {
        ...state,
        isTodoSavingFinished: true,
      };
    case ENABLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DISABLE_DATA_BTN_PRESSED:
      return {
        ...state,
        isDataBtnPressed: false,
      };
    case DISABLE_LOADED_TODOS:
      return {
        ...state,
        isTodoSavingFinished: false,
      };
    case DISABLE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case DATA_BTN_STATUS:
      return state.isDataBtnPressed;
    case LOADED_TODOS_STATUS:
      return state.isTodoSavingFinished;
    case LOADING_STATUS:
      return state.isLoading;

    default:
      return state;
  }
};

export default homePageReducer;
