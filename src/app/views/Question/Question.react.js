import React from 'react';
import PropTypes from 'prop-types';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import {
  Background,
  UserData,
  ProfilePicture,
  PictureBorder,
  CircleContainer,
} from './Question.styled';

import { Fade, Username, QuestionData } from './QuestionComponents.react';

const style = { 'flex-grow': 1 };
const Question = ({
  url,
  windowWidth,
  dimensions,
  question,
  authorName,
  renderQuestion,
  setRenderQuestion,
  setRender,
  shouldRender,
  percentage,
}) => {
  return (
    <Background width={windowWidth}>
      <UserData>
        <PictureBorder>
          <ProfilePicture url={url} />
        </PictureBorder>
        <Username name={authorName} />
      </UserData>

      <Fade show={renderQuestion} shouldRender={shouldRender} setRender={setRender}>
        <QuestionData
          dimensions={dimensions}
          optionOne={question.optionOne.text}
          optionTwo={question.optionTwo.text}
          setRenderQuestion={setRenderQuestion}
        />
      </Fade>
      <Fade show={!renderQuestion} shouldRender={!shouldRender} setRender={setRender}>
        <CircleContainer>
          <Progress percent={percentage} />
        </CircleContainer>
      </Fade>
    </Background>
  );
};
Question.propTypes = {
  url: PropTypes.string.isRequired,
  windowWidth: PropTypes.number,
  dimensions: PropTypes.objectOf(PropTypes.number),
  question: PropTypes.object.isRequired,
  authorName: PropTypes.string.isRequired,
  renderQuestion: PropTypes.bool.isRequired,
  setRenderQuestion: PropTypes.func.isRequired,
};

Question.defaultProps = {
  windowWidth: 0,
  dimensions: { width: 0, height: 0 },
};

export default Question;
