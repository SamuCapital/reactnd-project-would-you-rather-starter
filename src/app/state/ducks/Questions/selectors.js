// eslint-disable-next-line import/prefer-default-export
export const getSelected = (answers, qId) => {
  if (answers && answers[qId]) return answers[qId];
  return null;
};
