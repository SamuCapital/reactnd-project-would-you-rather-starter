import React from 'react';
import { connect } from 'react-redux';
import { handleCreateQuestion } from 'app/state/Shared/';
import { uiOperations } from 'app/state/ducks/UI';
import CreateQuestion from './CreateQuestion.react';

import { createInputFormula } from './CreateQuestion.helper';

const ConnectedComponent = ({ handleCreateQuestion, setInputText, optionOne, optionTwo }) => {
  const createQuestionInput = createInputFormula(setInputText);
  return (
    <CreateQuestion
      createQuestionInput={createQuestionInput}
      handleCreateQuestion={() => handleCreateQuestion(optionOne, optionTwo, 'tylermcginnis')}
    />
  );
};

const mapStateToProps = (state) => ({
  optionOne: state.ui.createQuestion.optionOneText,
  optionTwo: state.ui.createQuestion.optionTwoText,
});
const mapDispatchToProps = (dispatch) => ({
  handleCreateQuestion: (optionOneText, optionTwoText, author) =>
    dispatch(handleCreateQuestion({ optionOneText, optionTwoText, author })),
  setInputText: (option, text) => dispatch(uiOperations.setInputText(option, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
