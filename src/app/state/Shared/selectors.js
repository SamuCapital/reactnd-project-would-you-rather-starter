/* eslint-disable import/prefer-default-export */
/**
 * @param  {Object} state Application Question State
 * @param  {Boolean} filter True => get answered; False => get not answered Questions
 */
export const filterQuestionsAnswered = (state, filter) => {
  const useranswers = Object.keys(state.users[state.session].answers);
  return Object.keys(state.questions).filter(
    filter
      ? (question) => useranswers.includes(question)
      : (question) => !useranswers.includes(question),
  );
};
