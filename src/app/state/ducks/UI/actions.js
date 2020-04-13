import * as types from './types';

export const setScreenIsWide = (boolean) => ({
  type: types.UI_SET_SCREEN_IS_WIDE,
  payload: boolean,
});

export const setIsHome = (boolean) => ({
  type: types.UI_SET_IS_HOME,
  payload: boolean,
});

export const setFilter = (boolean) => ({
  type: types.UI_SET_ANSWER_FILTER,
  payload: boolean,
});

export const setIsFourOhFour = (boolean) => ({
  type: types.UI_TOGGLE_IS_FOUR_OH_FOUR,
  payload: boolean,
});

export const setNavBarHeight = (height) => ({
  type: types.UI_SET_NAV_BAR_HEIGHT,
  payload: height,
});

export const setInputText = (option, text) => ({
  type: types.UI_SET_QUESTION_INPUT,
  payload: { option, text },
});
