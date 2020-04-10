import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from './Question.react';
import { useWindowDimensions, createBackGroundStyle } from './Question.helper';

import { uiOperations } from '../../state/ducks/UI';

const ConnectedComponent = ({ question, url, authorName, isWide, setScreenIsWide }) => {
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

  return (
    <Question
      url={url}
      windowWidth={windowWidth}
      question={question}
      authorName={authorName}
      renderQuestion={renderQuestion}
      setRenderQuestion={setRenderQuestion}
      shouldRender={shouldRender}
      setRender={setRender}
      percentage={percentage}
      style={style}
    />
  );
};

ConnectedComponent.propTypes = {
  url: PropTypes.string,
  question: PropTypes.object.isRequired,
  authorName: PropTypes.string,
  isWide: PropTypes.bool.isRequired,
  setScreenIsWide: PropTypes.func.isRequired,
};
ConnectedComponent.defaultProps = {
  url: '',
  authorName: 'Unknown User',
};

const mapStateToProps = (state, ownProps) => {
  return {
    url: state.users[ownProps.question.author].avatarURL,
    authorName: state.users[ownProps.question.author].name,
    isWide: state.ui.isWide,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { setScreenIsWide: (boolean) => dispatch(uiOperations.setScreenIsWide(boolean)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent);
