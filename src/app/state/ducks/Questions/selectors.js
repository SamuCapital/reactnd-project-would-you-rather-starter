// eslint-disable-next-line import/prefer-default-export
export const getSelected = (answers, qId) => {
  console.log('Asking for ', qId, ' in ', answers);
  if (answers && answers[qId]) return answers[qId];
  return null;
};
