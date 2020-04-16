/* eslint-disable import/prefer-default-export */
import { questionOperations } from 'app/state/ducks/Questions';
import { setAuthenticatedUser } from './actions';
import { uiOperations } from '../UI';

export const setUser = (input, userState) => (dispatch) => {
  dispatch(uiOperations.setInputText('optionOneText', ''));
  dispatch(uiOperations.setInputText('optionTwoText', ''));
  dispatch(setAuthenticatedUser(input));
  console.log('INPUT: ', input, '\n STATE: ', userState);
  dispatch(questionOperations.setInitialAnswers(input && userState[input].answers));
  input !== null && dispatch(uiOperations.toggleRedirect(true));
};
