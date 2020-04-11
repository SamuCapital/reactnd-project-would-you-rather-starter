import { handleCreateQuestion } from 'app/state/Shared/sharedActions';

export const handleInputChange = (event, option) => {
  // ! ADD TO REDUX!
  console.log(option, ': ', event.target.value);
};
/**
 * @description Dispatches CreateQuestion Operation to Server and Redux
 * @param  {String} optionOneText
 * @param  {String} optionTwoText
 * @param  {String} author (Currently Authenticated User)
 * @param  {Function} dispatch redux dispatch action
 */
export const handleSubmit = (optionOneText, optionTwoText, author, dispatch) =>
  dispatch(handleCreateQuestion({ optionOneText, optionTwoText, author }));
