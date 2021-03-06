/* eslint-disable import/prefer-default-export */
import { questionOperations } from 'app/state/ducks/Questions';
import { setAuthenticatedUser } from './actions';
import { uiOperations } from '../UI';

export const setUser = (input, userState) => (dispatch) => {
  dispatch(uiOperations.setInputText('optionOneText', ''));
  dispatch(uiOperations.setInputText('optionTwoText', ''));
  dispatch(setAuthenticatedUser(input));
  dispatch(questionOperations.setInitialAnswers(input && userState[input].answers));
  dispatch(uiOperations.setFilter(false));
  input !== null && dispatch(uiOperations.toggleRedirect(true));
};
