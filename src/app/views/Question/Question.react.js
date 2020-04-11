import React from 'react';
import PropTypes from 'prop-types';

import {
  Background,
  UserData,
  ProfilePicture,
  PictureBorder,
  Container,
  Headline,
  SubmitButton,
} from './Question.styled';

import {} from './Question.helper';

import { Fade, AuthorName, QuestionData, ProgressBar, Options } from './Components';

const Question = ({
  url,
  createQuestion,
  question,
  authorName,
  renderQuestion,
  handleSubmit,
  shouldRender,
  setRender,
  percentage,
  style,
}) => {
  return (
    <Background style={style}>
      <UserData>
        <PictureBorder>
          <ProfilePicture url={url} />
        </PictureBorder>
        <AuthorName name={authorName} />
      </UserData>

      <Fade show={renderQuestion} shouldRender={shouldRender} setRender={setRender}>
        {/* <QuestionData
          optionOne={question.optionOne.text}
          optionTwo={question.optionTwo.text}
          setRenderQuestion={setRenderQuestion}
        /> */}
        <Container createQuestion={createQuestion}>
          <Headline>Would you rather...</Headline>
          {createQuestion || (
            <Options optionOne={question.optionOne.text} optionTwo={question.optionTwo.text} />
          )}
          <SubmitButton onClick={() => handleSubmit(false)}>Submit!</SubmitButton>
        </Container>
      </Fade>
      <Fade show={!renderQuestion} shouldRender={!shouldRender} setRender={setRender}>
        <ProgressBar result={percentage} />
      </Fade>
    </Background>
  );
};

Question.propTypes = {
  url: PropTypes.string.isRequired,
  createQuestion: PropTypes.bool.isRequired,
  question: PropTypes.object.isRequired,
  authorName: PropTypes.string.isRequired,
  renderQuestion: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  shouldRender: PropTypes.bool.isRequired,
  setRender: PropTypes.func.isRequired,
  percentage: PropTypes.number,
  style: PropTypes.object.isRequired,
};
Question.defaultProps = {
  percentage: 0,
};

export default Question;
