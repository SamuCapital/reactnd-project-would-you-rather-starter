// eslint-disable-next-line no-nested-ternary
export const mult = (i) => (i === 0 ? 3 : i === 1 ? 2 : 1); // 3 -> 2 -> rest 1

export const sort = (users, userA, userB) => sum(users, userB) - sum(users, userA);

export const answerScore = (users, user) => Object.keys(users[user].answers).length;

export const questionScore = (users, user) => Object.keys(users[user].questions).length;

export const sum = (users, user) => answerScore(users, user) + questionScore(users, user);

export const getUrl = (users, user) => users[user].avatarURL;
