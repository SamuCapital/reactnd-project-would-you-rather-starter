import update from 'immutability-helper';

import {
  UI_SET_SCREEN_IS_WIDE,
  UI_SET_IS_HOME,
  UI_SET_ANSWER_FILTER,
  UI_SET_QUESTION_INPUT,
} from './types';

const initialState = {
  isWide: true,
  isHome: true,
  filter: true, // True => get answered; False => get not answered Questions
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
