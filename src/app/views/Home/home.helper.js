/* eslint-disable import/prefer-default-export */
import { Selectors } from 'app/state/Shared';

export const getQuestions = (state, filter) =>
  state.session
    ? Selectors.filterQuestionsAnswered(state, filter)
    : Selectors.getAllQuestions(state, filter);
