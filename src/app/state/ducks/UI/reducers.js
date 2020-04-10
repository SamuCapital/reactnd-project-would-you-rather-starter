import { UI_SET_SCREEN_IS_WIDE } from './types';

const initialState = {
  isWide: true,
};

const userInterface = (state = initialState, action) => {
  console.log('Action: ', action.type);
  switch (action.type) {
    case UI_SET_SCREEN_IS_WIDE:
      return { ...state, isWide: action.payload };
    default:
      return state;
  }
};

export default userInterface;
