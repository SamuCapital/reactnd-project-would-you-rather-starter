import * as types from './types';

export const setInitialQuestions = (questions) => ({
  type: types.QUESTIONS_SET_INITIAL,
  payload: { ...questions },
});

export const questionAddAnswer = (questionId, userId, answer) => ({
  type: types.QUESTION_ADD_ANSWER,
  payload: {
    questionId,
    userId,
    answer,
  },
});

export const addQuestion = (question) => ({
  type: types.QUESTION_ADD_QUESTION,
  payload: question,
});
