import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from './Question.react';
import { useWindowDimensions, createBackGroundStyle } from './Question.helper';
import { questionContent } from './Components';

import { uiOperations } from '../../state/ducks/UI';

const ConnectedComponent = ({
  question,
  url,
  authorName,
  isWide,
  setScreenIsWide,
  createQuestion,
  handleSubmit,
  renderResults,
  filter,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const [renderQuestion, setRenderQuestion] = useState(true);
  const [shouldRender, setRender] = useState(true); // TODO: USE REDUX STATE
  const [percentage, setPercentage] = useState(0);

  const style = createBackGroundStyle(isWide);

  useEffect(() => {
    isWide && windowWidth < 900 && setScreenIsWide(false);
    !isWide && windowWidth > 900 && setScreenIsWide(true);
  }, [isWide, setScreenIsWide, windowWidth]);

  const target = 30;

  useEffect(() => {
    if (!shouldRender) {
      let number = 0;
      const interval = setInterval(() => {
        setPercentage(number);
        if (number >= target) clearInterval(interval);
        number += 1;
      }, 20);
    }
  }, [shouldRender]);

  const handleSubmitButton = createQuestion ? handleSubmit : () => setRenderQuestion(false);

  return (
    <Question
      url={url}
      creatingQuestion={!!createQuestion}
      authorName={authorName}
      renderQuestion={renderQuestion}
      handleSubmit={handleSubmitButton}
      shouldRender={shouldRender}
      setRender={setRender}
      percentage={percentage}
      style={style}
      // TODO: Replace filter bool (rn representing renderResults) with actual Data to be displayed(e.g. user, votes on question, etc)
      content={questionContent(createQuestion, question, handleSubmitButton, filter)}
    />
  );
};

ConnectedComponent.propTypes = {
  url: PropTypes.string,
  createQuestion: PropTypes.object,
  question: PropTypes.object,
  authorName: PropTypes.string,
  isWide: PropTypes.bool.isRequired,
  setScreenIsWide: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  renderResults: PropTypes.func,
  filter: PropTypes.bool.isRequired,
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
    url: ownProps.createQuestion
      ? state.session && state.users[state.session].avatarURL
      : state.users[ownProps.question.author].avatarURL,
    authorName: ownProps.createQuestion ? 'You' : state.users[ownProps.question.author].name,
    isWide: state.ui.isWide,
    filter: state.ui.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { setScreenIsWide: (boolean) => dispatch(uiOperations.setScreenIsWide(boolean)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
