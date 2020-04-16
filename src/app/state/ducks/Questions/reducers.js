import update from 'immutability-helper';
import * as types from './types';

const initialState = { loadInitialState: true };

export const Questions = (state = initialState, action) => {
  switch (action.type) {
    case types.QUESTIONS_SET_INITIAL: {
      return action.payload;
    }
    case types.QUESTION_ADD_ANSWER: {
      const { quesionId, userId, answer } = action.payload;
      const newState = update(state, {
        [quesionId]: {
          [answer]: { votes: { $push: userId } },
        },
      });
      return newState;
    }
    case types.QUESTION_ADD_QUESTION: {
      const newState = { ...state, [action.payload.id]: { ...action.payload } };
      return newState;
    }

    default:
      return state;
  }
};

export const QuestionAnswers = (state = {}, action) => {
  switch (action.type) {
    case types.ANSWERS_SET_ANSWER: {
      return { ...state, [action.payload.id]: action.payload.option };
    }
    default:
      return state;
  }
};
