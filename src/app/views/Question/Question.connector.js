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
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const [renderQuestion, setRenderQuestion] = useState(true);
  const [shouldRender, setRender] = useState(true);
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
      content={questionContent(createQuestion, question)}
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
    url: ownProps.createQuestion
      ? state.session && state.users[state.session].avatarURL
      : state.users[ownProps.question.author].avatarURL,
    authorName: ownProps.createQuestion ? 'You' : state.users[ownProps.question.author].name,
    isWide: state.ui.isWide,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { setScreenIsWide: (boolean) => dispatch(uiOperations.setScreenIsWide(boolean)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
