/**
 * @param  {Object} questions Application Question State
 * @param  {Object} users Application Users State
 * @param  {Object} session ID of Logged in User
 * @param  {Boolean} answered True => get answered; False => get not answered Questions
 */
const filterQuestionsAnswered = (questions, users, session, answered) =>
  Object.values(questions).filter((question) =>
    Object.values(users[session].answers).forEach(answered answered ? !== : === question),
  );
