import update from 'immutability-helper';
import * as types from './types';

const initialState = { loadInitialState: true };

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_SET_INITIAL: {
      return action.payload;
    }
    case types.ADD_ANSWER: {
      const { user, answer, questionId } = action.payload;
      const newState = update(state, {
        [user]: {
          answers: { $merge: { [questionId]: answer } },
        },
      });
      return newState;
    }
    case types.USER_ADD_QUESTION: {
      const { id, author: user } = action.payload;
      const newState = update(state, {
        [user]: { questions: { $push: [id] } },
      });
      return newState;
    }

    default:
      return state;
  }
};

export default users;
