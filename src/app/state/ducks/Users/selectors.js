/* eslint-disable import/prefer-default-export */
/**
 * @description Return Complete Name of user
 * @param  {String} userId
 * @param  {Object} state
 * */
export const getGreeting = (state) =>
  state.session ? `Logout (${state.users[state.session].name})` : 'Login';

export const getUrl = (users, user) => users[user].avatarURL;

export const getFullName = (users, user) => users[user].name;
