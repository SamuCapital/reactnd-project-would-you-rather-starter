import React from 'react';

import Question from '../Question';

const CreateQuesion = ({ createQuestionInput, handleCreateQuestion }) => {
  return <Question handleSubmit={handleCreateQuestion} createQuestion={createQuestionInput} />;
};

export default CreateQuesion;
