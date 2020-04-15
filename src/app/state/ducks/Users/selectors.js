/* eslint-disable import/prefer-default-export */
/**
 * @description Return Complete Name of user
 * @param  {String} userId
 * @param  {Object} state
 * */
export const getGreeting = (state) =>
  state.session ? `Logout (${state.users[state.session].name})` : 'Login';
