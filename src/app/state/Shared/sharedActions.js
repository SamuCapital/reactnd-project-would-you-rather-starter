/* eslint-disable import/prefer-default-export */
import { showLoading, hideLoading } from 'react-redux-loading';
import { questionOperations } from '../ducks/Questions';
import { usersOperations } from '../ducks/Users';
import { sessionOperations } from '../ducks/Session';
import { _getUsers, _getQuestions, _saveQuestion } from '../../../backend/_DATA';

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
      dispatch(sessionOperations.default('tylermcginnis'));
      dispatch(hideLoading);
    });
  };
};

// export function handleAddTweet (text, replyingTo) {
//   return (dispatch, getState) => {
//     const { authedUser } = getState()

//     dispatch(showLoading())

//     return saveTweet({
//       text,
//       author: authedUser,
//       replyingTo
//     })
//       .then((tweet) => dispatch(addTweet(tweet)))
//       .then(() => dispatch(hideLoading()))
//   }
// }

export const handleCreateQuestion = (questionInput) => (dispatch) => {
  dispatch(showLoading);
  return _saveQuestion(questionInput).then((question) =>
    dispatch(questionOperations.addQuestion(question)).then(() => dispatch(hideLoading())),
  );
};

// !FIXME: ADD ADQUESTION ACTION TO QUESTION REDUCER
