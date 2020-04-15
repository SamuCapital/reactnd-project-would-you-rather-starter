import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Question from './Question.react';
import { useWindowDimensions, createBackGroundStyle } from './Question.helper';
import { questionContent, generateContent } from './Components';

import { uiOperations } from '../../state/ducks/UI';

const ConnectedComponent = ({
  questionState,
  question,
  url,
  authorName,
  isWide,
  setScreenIsWide,
  createQuestion,
  handleSubmit,
  renderResults,
  filter,
  session,
  path,
}) => {
  const params = useParams();
  console.log('Params: ', params);
  if (params && params.question_id) question = questionState[params.question_id];

  const { width: windowWidth } = useWindowDimensions();
  const [renderQuestion, setRenderQuestion] = useState(true);
  const [shouldRender, setRender] = useState(true); // TODO: USE REDUX STATE

  const style = createBackGroundStyle(isWide);

  useEffect(() => {
    isWide && windowWidth < 900 && setScreenIsWide(false);
    !isWide && windowWidth > 900 && setScreenIsWide(true);
  }, [isWide, setScreenIsWide, windowWidth]);

  if (questionState.loadInitialState || !question) return null;

  let content = null;
  if (createQuestion)
    content = generateContent(
      'create',
      createQuestion,
      session ? handleSubmit : null,
      path,
      session,
    );
  else if (!filter)
    content = generateContent(
      'display',
      null,
      () => setRenderQuestion(false),
      path,
      session,
      question,
      filter,
    );
  else if (filter)
    content = generateContent(
      'result',
      null,
      () => setRenderQuestion(false),
      path,
      session,
      question,
      filter,
    );
  return (
    <Question
      id={question.id}
      url={url}
      creatingQuestion={!!createQuestion}
      authorName={authorName}
      renderQuestion={renderQuestion}
      shouldRender={shouldRender}
      setRender={setRender}
      style={style}
      // TODO: Replace filter bool (rn representing renderResults) with actual Data to be displayed(e.g. user, votes on question, etc)
      content={content}
    />
  );
};

ConnectedComponent.propTypes = {
  question: PropTypes.object,
  url: PropTypes.string,
  createQuestion: PropTypes.object,
  authorName: PropTypes.string,
  isWide: PropTypes.bool.isRequired,
  setScreenIsWide: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  renderResults: PropTypes.func,
  filter: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
ConnectedComponent.defaultProps = {
  url: '',
  authorName: 'You',
  createQuestion: null,
  question: {},
  handleSubmit: () => null,
  renderResults: false,
};

const mapStateToProps = (state, ownProps) => {
  return {
    url:
      ownProps.question &&
      (ownProps.createQuestion
        ? state.session && state.users[state.session].avatarURL
        : state.users[ownProps.question.author].avatarURL),
    authorName:
      ownProps.question &&
      (ownProps.createQuestion ? 'You' : state.users[ownProps.question.author].name),
    isWide: state.ui.isWide,
    filter: state.ui.filter,
    session: state.session,
    path: state.ui.navigationPath,
    questionState: state.questions,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { setScreenIsWide: (boolean) => dispatch(uiOperations.setScreenIsWide(boolean)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
