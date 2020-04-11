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

export const setInputText = (option, text) => ({
  type: types.UI_SET_QUESTION_INPUT,
  payload: { option, text },
});
