/* eslint-disable import/prefer-default-export */
import { showLoading, hideLoading } from 'react-redux-loading';
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
    dispatch(showLoading);
    return getInitialData().then(({ users, questions }) => {
      dispatch(usersOperations.setInitialUsers(users));
      dispatch(questionOperations.setInitialQuestions(questions));
      dispatch(sessionOperations.setUser('tylermcginnis'));
      dispatch(hideLoading);
    });
  };
};

export const handleCreateQuestion = (questionInput) => (dispatch) => {
  dispatch(showLoading);
  return _saveQuestion(questionInput)
    .then((question) => dispatch(questionOperations.addQuestion(question)))
    .then(() => dispatch(hideLoading()))
    .then(() => dispatch(uiOperations.toggleRedirect(true)));
};

// !FIXME: ADD ADQUESTION ACTION TO QUESTION REDUCER

export const setAnswer = (session, questionId, selected) => (dispatch) => {
  console.log('Gotta dispatch some stuff...', session, questionId, selected);
  dispatch(usersOperations.userAddAnswer(session, questionId, selected));
  dispatch(questionOperations.questionAddAnswer(session, questionId, selected));
};
