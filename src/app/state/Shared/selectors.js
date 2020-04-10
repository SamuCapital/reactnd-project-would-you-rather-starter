/* eslint-disable import/prefer-default-export */
/**
 * @description Get Questions Based on input Filter
 * @param  {Object} state Application Question State
 * @param  {Boolean} filter True => get answered; False => get not answered Questions
 * @returns {Array} [] of Questions
 */
export const filterQuestionsAnswered = (state, filter) => {
  const useranswers = Object.keys(state.users[state.session].answers);
  const questions = [];
  Object.keys(state.questions)
    .filter(
      filter
        ? (question) => useranswers.includes(question)
        : (question) => !useranswers.includes(question),
    )
    .forEach((questionId) => questions.push(state.questions[questionId]));
  return questions;
};
