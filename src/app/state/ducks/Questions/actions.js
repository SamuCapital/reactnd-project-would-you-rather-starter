import * as types from './types';

export const setInitialQuestions = (questions) => ({
  type: types.QUESTIONS_SET_INITIAL,
  payload: { ...questions },
});

export const questionAddAnswer = (userId, questionId, answer) => ({
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

export const setInitialAnswers = (answers) => ({
  type: types.ANSWERS_SET_INITIAL,
  payload: answers,
});

export const setAnswer = (id, option) => ({
  type: types.ANSWERS_SET_ANSWER,
  payload: { id, option },
});
