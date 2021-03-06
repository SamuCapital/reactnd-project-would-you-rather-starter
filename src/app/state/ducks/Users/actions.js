import * as types from './types';

export const setInitialUsers = (users) => ({
  type: types.USER_SET_INITIAL,
  payload: { ...users },
});

export const userAddAnswer = (userId, questionId, answer) => ({
  type: types.ADD_ANSWER,
  payload: {
    user: userId,
    questionId,
    answer,
  },
});

export const userAddQuestion = (question) => ({
  type: types.USER_ADD_QUESTION,
  payload: question,
});
