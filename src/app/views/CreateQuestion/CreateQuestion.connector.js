/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleCreateQuestion } from 'app/state/Shared/';
import { uiOperations } from 'app/state/ducks/UI';
import { Redirect } from 'react-router-dom';
import CreateQuestion from './CreateQuestion.react';

import { createInputFormula } from './CreateQuestion.helper';

const ConnectedComponent = ({
  handleCreateQuestion,
  setInputText,
  optionOne,
  optionTwo,
  redirect,
  session,
}) => {
  const createQuestionInput = createInputFormula(setInputText);

  if (!session) return <Redirect to="login" />;

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <CreateQuestion
      createQuestionInput={createQuestionInput}
      handleCreateQuestion={() => handleCreateQuestion(optionOne, optionTwo, 'tylermcginnis')}
    />
  );
};

ConnectedComponent.propTypes = {
  handleCreateQuestion: PropTypes.func.isRequired,
  setInputText: PropTypes.func.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
  redirect: PropTypes.bool.isRequired,
  session: PropTypes.oneOf([PropTypes.string, PropTypes.object]).isRequired,
};

const mapStateToProps = ({ ui, session }) => ({
  redirect: ui.redirectToIndex,
  optionOne: ui.createQuestion ? ui.createQuestion.optionOneText : '',
  optionTwo: ui.createQuestion ? ui.createQuestion.optionTwoText : '',
  session,
});
const mapDispatchToProps = (dispatch) => ({
  handleCreateQuestion: (optionOneText, optionTwoText, author) =>
    dispatch(handleCreateQuestion({ optionOneText, optionTwoText, author })),
  setInputText: (option, text) => dispatch(uiOperations.setInputText(option, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
