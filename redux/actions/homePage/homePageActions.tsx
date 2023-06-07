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
} from "./homePageActionsType";

export const enableDataBtnPressed = () => {
  return {
    type: ENABLE_DATA_BTN_PRESSED,
  };
};
export const enableLoadedTodos = () => {
  return {
    type: ENABLE_LOADED_TODOS,
  };
};
export const enableLoading = () => {
  return {
    type: ENABLE_LOADING,
  };
};
export const disableDataBtnPressed = () => {
  return {
    type: DISABLE_DATA_BTN_PRESSED,
  };
};
export const disableLoadedTodos = () => {
  return {
    type: DISABLE_LOADED_TODOS,
  };
};
export const disableLoading = () => {
  return {
    type: DISABLE_LOADING,
  };
};

export const getLoadingStatus = () => {
  return {
    type: LOADING_STATUS,
  };
};

export const getDataBtnStatus = () => {
  return {
    type: DATA_BTN_STATUS,
  };
};

export const getLoadedTodosStatus = () => {
  return {
    type: LOADED_TODOS_STATUS,
  };
};
