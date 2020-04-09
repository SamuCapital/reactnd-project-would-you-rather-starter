import React from 'react';
import PropTypes from 'prop-types';
import { Background, UserData, ProfilePicture, PictureBorder } from './Question.styled';

import { Fade, Username, QuestionData } from './QuestionComponents.react';

const style = { 'flex-grow': 1 };
const Question = ({
  url,
  windowWidth,
  containerRef,
  dimensions,
  question,
  authorName,
  renderQuestion,
  setRenderQuestion,
}) => {
  return (
    <Background width={windowWidth}>
      <UserData>
        <PictureBorder>
          <ProfilePicture url={url} />
        </PictureBorder>
        <Username name={authorName} />
      </UserData>

      <Fade show={renderQuestion}>
        <QuestionData
          containerRef={containerRef}
          dimensions={dimensions}
          optionOne={question.optionOne.text}
          optionTwo={question.optionTwo.text}
          setRenderQuestion={setRenderQuestion}
        />
      </Fade>
      <Fade show={!renderQuestion}>
        <h1 onClick={() => setRenderQuestion(true)}>ANIMATE</h1>
      </Fade>
    </Background>
  );
};
Question.propTypes = {
  url: PropTypes.string.isRequired,
  windowWidth: PropTypes.number,
  containerRef: PropTypes.object,
  dimensions: PropTypes.objectOf(PropTypes.number),
  question: PropTypes.object.isRequired,
  authorName: PropTypes.string.isRequired,
  renderQuestion: PropTypes.bool.isRequired,
  setRenderQuestion: PropTypes.func.isRequired,
};

Question.defaultProps = {
  windowWidth: 0,
  containerRef: {},
  dimensions: { width: 0, height: 0 },
};

export default Question;

/* width: ${(props) => props.dimensions.width}px; */
/* height: ${(props) => props.dimensions.height}px; */

/* width: ${(props) => props.dimensions.width - 15}px; */
/* height: ${(props) => props.dimensions.height - 15}px; */
/* margin: ${(props) => props.dimensions.height * 0.05}px; */
