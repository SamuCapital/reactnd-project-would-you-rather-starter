import { SET_AUTHENTICATED_USER } from './types';

const AuthenticatedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED_USER:
      return action.payload;
    default:
      return state;
  }
};

export default AuthenticatedUser;
