import { showLoading, hideLoading } from 'react-redux-loading';
import { questionOperations } from './ducks/Questions';
import { usersOperations } from './ducks/Users';
import { _getUsers, _getQuestions } from '../../backend/_DATA';

const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions,
  }));
};

/**
 * @description Fetches all initial Data from the api and adds it to Store
 */
const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading);
    return getInitialData().then(({ users, questions }) => {
      dispatch(questionOperations.setInitialQuestions(questions));
      dispatch(usersOperations.setInitialUsers(users));
      dispatch(hideLoading);
    });
  };
};

export default handleInitialData;
