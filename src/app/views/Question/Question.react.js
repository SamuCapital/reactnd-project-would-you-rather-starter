import React from 'react';
import PropTypes from 'prop-types';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import {
  Background,
  UserData,
  ProfilePicture,
  PictureBorder,
  ResultBarContainer,
} from './Question.styled';

import { Fade, AuthorName, QuestionData } from './QuestionComponents.react';

const Question = ({
  url,
  windowWidth,
  question,
  authorName,
  renderQuestion,
  setRenderQuestion,
  shouldRender,
  setRender,
  percentage,
}) => {
  return (
    <Background width={windowWidth}>
      <UserData>
        <PictureBorder>
          <ProfilePicture url={url} />
        </PictureBorder>
        <AuthorName name={authorName} />
      </UserData>

      <Fade show={renderQuestion} shouldRender={shouldRender} setRender={setRender}>
        <QuestionData
          optionOne={question.optionOne.text}
          optionTwo={question.optionTwo.text}
          setRenderQuestion={setRenderQuestion}
        />
      </Fade>
      <Fade show={!renderQuestion} shouldRender={!shouldRender} setRender={setRender}>
        <ResultBarContainer>
          <Progress percent={percentage} />
        </ResultBarContainer>
      </Fade>
    </Background>
  );
};

Question.propTypes = {
  url: PropTypes.string.isRequired,
  windowWidth: PropTypes.number,
  question: PropTypes.object.isRequired,
  authorName: PropTypes.string.isRequired,
  renderQuestion: PropTypes.bool.isRequired,
  setRenderQuestion: PropTypes.func.isRequired,
  shouldRender: PropTypes.bool.isRequired,
  setRender: PropTypes.func.isRequired,
  percentage: PropTypes.number,
};
Question.defaultProps = {
  windowWidth: 0,
  percentage: 0,
};

export default Question;
