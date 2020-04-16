/* eslint-disable import/prefer-default-export */
import { questionOperations } from 'app/state/ducks/Questions';
import { usersOperations } from 'app/state/ducks/Users';
import { sessionOperations } from 'app/state/ducks/Session';
import { uiOperations } from 'app/state/ducks/UI';
import { _getUsers, _getQuestions, _saveQuestion } from 'backend/_DATA';

const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions,
  }));
};

/**
 * @description Fetches all initial Data from the api and adds it to Store
 */
export const fetchInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(usersOperations.setInitialUsers(users));
      dispatch(questionOperations.setInitialQuestions(questions));
      dispatch(sessionOperations.setUser('tylermcginnis'));
    });
  };
};

export const handleCreateQuestion = (questionInput) => (dispatch) => {
  return _saveQuestion(questionInput)
    .then((question) => dispatch(questionOperations.addQuestion(question)))
    .then(() => dispatch(uiOperations.toggleRedirect(true)));
};

// !FIXME: ADD ADQUESTION ACTION TO QUESTION REDUCER

export const setAnswer = (session, questionId, selected) => (dispatch) => {
  dispatch(usersOperations.userAddAnswer(session, questionId, selected));
  dispatch(questionOperations.questionAddAnswer(session, questionId, selected));
};
