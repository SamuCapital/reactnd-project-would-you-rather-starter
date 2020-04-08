import React from 'react';
import PropTypes from 'prop-types';
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
} from './Question.styled';

import { Options, Username } from './QuestionComponents.react';

const Question = ({ url, windowWidth, containerRef, dimensions, question, authorName }) => {
  return (
    <Background width={windowWidth}>
      <UserData>
        <PictureBorder>
          <ProfilePicture url={url} />
        </PictureBorder>
        <Username name={authorName} />
      </UserData>
      <ContainerContainer ref={containerRef}>
        <ContainerBG dimensions={dimensions} />
        <Container dimensions={dimensions}>
          <Headline>Would you rather...</Headline>
          <Options optionOne={question.optionOne.text} optionTwo={question.optionTwo.text} />
          <SubmitButton>Submit!</SubmitButton>
        </Container>
      </ContainerContainer>
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
};

Question.defaultProps = {
  windowWidth: 0,
  containerRef: {},
  dimensions: { width: 0, height: 0 },
};

export default Question;
