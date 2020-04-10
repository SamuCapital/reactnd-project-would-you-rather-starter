import * as types from './types';

export const setScreenIsWide = (boolean) => {
  console.log('TOGGLEDE');
  return {
    type: types.UI_SET_SCREEN_IS_WIDE,
    payload: boolean,
  };
};
