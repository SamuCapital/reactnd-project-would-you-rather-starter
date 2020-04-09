import React, { useRef, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from './Question.react';
import { useWindowDimensions } from './Question.helper';

const ConnectedComponent = ({ question, url, authorName }) => {
  const { width: windowWidth } = useWindowDimensions();
  const [renderQuestion, setRenderQuestion] = useState(true);
  const [shouldRender, setRender] = useState(true);
  const [percentage, setPercentage] = useState(0);

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
    />
  );
};

ConnectedComponent.propTypes = {
  url: PropTypes.string,
  question: PropTypes.object.isRequired,
  authorName: PropTypes.string,
};
ConnectedComponent.defaultProps = {
  url: '',
  authorName: 'Unknown User',
};

const mapStateToProps = (state, ownProps) => {
  return {
    url: state.users[ownProps.question.author].avatarURL,
    authorName: state.users[ownProps.question.author].name,
  };
};

export default connect(mapStateToProps)(ConnectedComponent);
