/* eslint-disable import/prefer-default-export */
import { setAuthenticatedUser } from './actions';
import { uiOperations } from '../UI';

export const setUser = (input) => (dispatch) => {
  dispatch(uiOperations.setInputText('optionOneText', ''));
  dispatch(uiOperations.setInputText('optionTwoText', ''));
  dispatch(setAuthenticatedUser(input));
  input !== null && dispatch(uiOperations.toggleRedirect(true));
};
