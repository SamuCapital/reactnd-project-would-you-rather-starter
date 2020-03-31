import * as types from './types';

const setAuthenticatedUser = (user) => ({
  type: types.SET_AUTHENTICATED_USER,
  payload: user,
});

export default setAuthenticatedUser;
