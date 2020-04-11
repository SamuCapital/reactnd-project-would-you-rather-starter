import { UI_SET_SCREEN_IS_WIDE, UI_SET_IS_HOME, UI_SET_ANSWER_FILTER } from './types';

const initialState = {
  isWide: true,
  isHome: false,
  filter: false, // True => get answered; False => get not answered Questions
};

const userInterface = (state = initialState, action) => {
  switch (action.type) {
    case UI_SET_SCREEN_IS_WIDE: {
      return { ...state, isWide: action.payload };
    }
    case UI_SET_IS_HOME: {
      return { ...state, isHome: action.payload };
    }
    case UI_SET_ANSWER_FILTER: {
      return { ...state, filter: action.payload };
    }
    default:
      return state;
  }
};

export default userInterface;
