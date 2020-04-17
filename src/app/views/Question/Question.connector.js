/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { questionOperations, questionSelectors } from 'app/state/ducks/Questions';
import { usersSelectors } from 'app/state/ducks/Users';
import { setAnswer } from 'app/state/Shared';
import Question from './Question.react';
import { useWindowDimensions, createBackGroundStyle, handleDisplaySubmit } from './Question.helper';
import { generateContent } from './Components';
import { uiOperations } from '../../state/ducks/UI';

const ConnectedComponent = ({
  questionState,
  question,
  url,
  userState,
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
  if (params && params.question_id) question = questionState[params.question_id];
  if (question && !createQuestion) {
    url = usersSelectors.getUrl(userState, question.author);
    authorName = usersSelectors.getFullName(userState, question.author);
  }

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
  if (createQuestion) {
    content = generateContent(
      'create',
      createQuestion,
      session ? handleSubmit : null,
      path,
      session,
    );
    url = usersSelectors.getUrl(userState, session);
  } else if (!filter)
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
      questionSelectors.getSelected(answers, question.id),
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
      questionSelectors.getSelected(answers, question.id),
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
      loggedIn={!!session}
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
  session: PropTypes.string,
  setQuestionAnswer: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
  setAnswer: PropTypes.func.isRequired,
  userState: PropTypes.object.isRequired,
};
ConnectedComponent.defaultProps = {
  url: '',
  authorName: 'You',
  createQuestion: null,
  question: {},
  handleSubmit: () => null,
  session: null,
};

const mapStateToProps = (state, ownProps) => {
  return {
    url:
      ownProps.question &&
      (ownProps.createQuestion
        ? state.session && usersSelectors.getUrl(state.users, state.session)
        : usersSelectors.getUrl(state.users, ownProps.question.author)),
    authorName:
      ownProps.question &&
      (ownProps.createQuestion
        ? 'You'
        : usersSelectors.getFullName(state.users, ownProps.question.author)), // state.users[ownProps.question.author].name),
    userState: state.users,
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
