import * as API from '../../../../backend';
import { setInitialUsers, userAddAnswer } from './actions';

const fetchInitialUsers = (dispatch) => {
  // eslint-disable-next-line no-underscore-dangle
  API._getUsers.then((users) => dispatch(setInitialUsers(users)));
};

export { fetchInitialUsers, userAddAnswer };
