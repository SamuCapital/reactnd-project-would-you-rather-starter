/* eslint-disable import/prefer-default-export */
import * as types from './types';

export const setAuthenticatedUser = (user) => ({
  type: types.SET_AUTHENTICATED_USER,
  payload: user,
});
