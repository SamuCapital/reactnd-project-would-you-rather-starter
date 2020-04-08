import update from 'immutability-helper';
import * as types from './types';

const initialState = { loadInitialState: true };

const Questions = (state = initialState, action) => {
  switch (action.type) {
    case types.QUESTIONS_SET_INITIAL: {
      return action.payload;
    }
    case types.QUESTION_ADD_ANSWER: {
      const { quesionId, userId, answer } = action.payload;
      const newState = update(state, {
        [quesionId]: {
          [answer]: { votes: { $merge: userId } },
        },
      });
      return newState;
    }

    default:
      return state;
  }
};

export default Questions;
