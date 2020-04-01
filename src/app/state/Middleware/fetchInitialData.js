import * as API from '../../../backend/_DATA';
import { setInitialUsers } from '../ducks/Users/actions';

// TODO: REFACTOR TO MIDDLEWARE
const fetchInitialUsers = (store) => (next) => (action) => {
  const state = store.getState();
  state.users &&
    state.users.loadInitialState &&
    // eslint-disable-next-line no-underscore-dangle
    API._getUsers().then((users) => store.dispatch(setInitialUsers(users)));
  return next(action);
};

export default fetchInitialUsers;
