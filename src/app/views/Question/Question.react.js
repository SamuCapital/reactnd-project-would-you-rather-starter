import React from 'react';
import PropTypes from 'prop-types';
import { AnimateOnChange } from 'react-animation';
import {
  ContainerContainer,
  ContainerBG,
  Container,
  Background,
  UserData,
  ProfilePicture,
  PictureBorder,
  Headline,
  SubmitButton,
  ContainerData,
} from './Question.styled';

import { Options, Username } from './QuestionComponents.react';

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

      {/* <ContainerData> */}
      {/* <AnimateOnChange> */}
      {renderQuestion ? (
        <ContainerContainer ref={containerRef}>
          <ContainerBG dimensions={dimensions} />
          <Container dimensions={dimensions}>
            <Headline>Would you rather...</Headline>
            <Options optionOne={question.optionOne.text} optionTwo={question.optionTwo.text} />
            <SubmitButton>Submit!</SubmitButton>
          </Container>
        </ContainerContainer>
      ) : (
        <h1>ANIMATE</h1>
      )}
      {/* </AnimateOnChange> */}
      {/* </ContainerData> */}
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
