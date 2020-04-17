import React from 'react';
import PropTypes from 'prop-types';

import Question from '../Question';

const CreateQuesion = ({ createQuestionInput, handleCreateQuestion }) => {
  return <Question handleSubmit={handleCreateQuestion} createQuestion={createQuestionInput} />;
};

CreateQuesion.propTypes = {
  handleCreateQuestion: PropTypes.func.isRequired,
  createQuestionInput: PropTypes.element.isRequired,
};
export default CreateQuesion;
