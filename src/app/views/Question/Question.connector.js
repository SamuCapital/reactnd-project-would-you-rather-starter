import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { questionOperations, questionSelectors } from 'app/state/ducks/Questions';
import { setAnswer } from 'app/state/Shared';
import Question from './Question.react';
import { useWindowDimensions, createBackGroundStyle, handleDisplaySubmit } from './Question.helper';
import { generateContent } from './Components';
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
  filter,
  session,
  path,
  setQuestionAnswer,
  answers,
  // eslint-disable-next-line no-shadow
  setAnswer,
}) => {
  const params = useParams();
  // eslint-disable-next-line no-param-reassign
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
      () =>
        handleDisplaySubmit(
          path === '/',
          setRenderQuestion,
          setAnswer,
          session,
          question.id,
          questionSelectors.getSelected(answers, question.id),
        ),
      path,
      session,
      question,
      filter,
      setQuestionAnswer,
    );
  else if (filter)
    content = generateContent(
      'result',
      null,
      null,
      path,
      session,
      question,
      filter,
      setQuestionAnswer,
      questionSelectors.getSelected(answers, question.id),
    );
  let results = null;
  if (!createQuestion)
    results = generateContent(
      'result',
      null,
      null,
      path,
      session,
      question,
      filter,
      setQuestionAnswer,
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
      content={content}
      path={path}
      results={results}
    />
  );
};

ConnectedComponent.propTypes = {
  questionState: PropTypes.object.isRequired,
  question: PropTypes.object,
  url: PropTypes.string,
  createQuestion: PropTypes.object,
  authorName: PropTypes.string,
  isWide: PropTypes.bool.isRequired,
  setScreenIsWide: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  filter: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  session: PropTypes.string.isRequired,
  setQuestionAnswer: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
  setAnswer: PropTypes.func.isRequired,
};
ConnectedComponent.defaultProps = {
  url: '',
  authorName: 'You',
  createQuestion: null,
  question: {},
  handleSubmit: () => null,
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
    answers: state.answers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setScreenIsWide: (boolean) => dispatch(uiOperations.setScreenIsWide(boolean)),
    setQuestionAnswer: (id, opt) => dispatch(questionOperations.setAnswer(id, opt)),
    setAnswer: (session, questionId, selected) =>
      dispatch(setAnswer(session, questionId, selected)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
