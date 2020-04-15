import update from 'immutability-helper';

import {
  UI_SET_SCREEN_IS_WIDE,
  UI_SET_IS_HOME,
  UI_SET_ANSWER_FILTER,
  UI_TOGGLE_IS_FOUR_OH_FOUR,
  UI_SET_QUESTION_INPUT,
  UI_SET_NAV_BAR_HEIGHT,
  UI_SET_REDIRECT_TO_INDEX,
} from './types';

const initialState = {
  isWide: true,
  isHome: false,
  filter: false, // True => get answered; False => get not answered Questions
  isFourOhFour: true,
  navBarHeight: 0,
  redirectToIndex: false,
  createQuestion: {
    optionOneText: '',
    optionTwoText: '',
  },
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
    case UI_TOGGLE_IS_FOUR_OH_FOUR: {
      return { ...state, isFourOhFour: action.payload };
    }
    case UI_SET_NAV_BAR_HEIGHT: {
      return { ...state, navBarHeight: action.payload };
    }
    case UI_SET_REDIRECT_TO_INDEX: {
      return { ...state, redirectToIndex: action.payload };
    }
    case UI_SET_QUESTION_INPUT: {
      return update(state, {
        createQuestion: { [action.payload.option]: { $set: action.payload.text } },
      });
    }
    default:
      return state;
  }
};

export default userInterface;
